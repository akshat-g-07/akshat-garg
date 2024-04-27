/* eslint-disable no-unused-vars */
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import gsap from "gsap";

let scene,
  renderer,
  camera,
  character,
  animationMixer,
  animationAction,
  cameraTimeline,
  lowerTimeLimit = 0,
  upperTimeLimit = 0,
  scrollDown = 0,
  timelineIndex = 0,
  camerCoords = { x: 5, y: 5, z: 20 },
  timelineArray =
    window.innerWidth < 768
      ? [
          { x: 1, y: 3.5, z: 7.5 },
          { x: 0, y: 3.5, z: 10 },
          { x: 0, y: 3.5, z: 10 },
          { x: -1, y: 2, z: 12 },
          { x: 0, y: 0, z: 10 },
          { x: -0.75, y: 0, z: 10 },
          { x: -0.75, y: 1.5, z: 10 },
        ]
      : window.innerWidth < 1024
      ? [
          { x: 1, y: 2.5, z: 4 },
          { x: 1, y: 2.5, z: 8 },
          { x: -0.5, y: 3, z: 8 },
          { x: -0.75, y: 1.5, z: 7.5 },
          { x: 0, y: 1, z: 6.5 },
          { x: -0.75, y: 2, z: 8 },
          { x: -1, y: 2, z: 8 },
        ]
      : [
          { x: 1, y: 2.5, z: 3.5 },
          { x: 2.5, y: 1.5, z: 4.5 },
          { x: -1.5, y: 1.5, z: 5 },
          { x: -2, y: 1.5, z: 6 },
          { x: 1.5, y: 1.5, z: 6.5 },
          { x: 1.5, y: 1.5, z: 6.5 },
          { x: -1.5, y: 1.5, z: 5 },
        ];

init();

function init() {
  const container = document.getElementById("canvas");

  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.set(camerCoords.x, camerCoords.y, camerCoords.z);

  scene = new THREE.Scene();

  const spotLight = new THREE.SpotLight(0xffffff, 100);
  spotLight.position.set(0, 5, 2);
  spotLight.penumbra = 1;
  spotLight.castShadow = true;
  spotLight.shadow.focus = 1;
  scene.add(spotLight);

  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 100),
    new THREE.MeshPhongMaterial({ color: 0xcbcbcb, depthWrite: false })
  );
  mesh.rotation.x = -Math.PI / 2;
  mesh.receiveShadow = true;
  scene.add(mesh);

  const charLoader = new GLTFLoader().load("models/character.glb", (gltf) => {
    character = gltf.scene;
    character.castShadow = true;
    character.scale.set(1.5, 1.5, 1.5);
    character.position.set(0, 0, 0);
    scene.add(character);

    character.traverse(function (object) {
      if (object.isMesh) object.castShadow = true;
    });

    const animLoader = new FBXLoader().load("models/animation.fbx", (fbx) => {
      animationMixer = new THREE.AnimationMixer(character);

      const animationClip = fbx.animations[0];
      animationAction = animationMixer.clipAction(animationClip);

      animationAction.play();
      requestAnimationFrame(animate);
      animationMixer.update(0.0001);
      animationAction.paused = false;

      cameraTimeline.to(camerCoords, {
        x: timelineArray[0].x,
        y: timelineArray[0].y,
        z: timelineArray[0].z,
        ease: "slow(0.7,0.7,false)",
        duration: 2,
        onUpdate: () => {
          camera.position.set(camerCoords.x, camerCoords.y, camerCoords.z);
        },
      });
    });
  });

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setPixelRatio(2);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  container.appendChild(renderer.domElement);
  renderer.render(scene, camera);

  window.addEventListener("resize", onWindowResize);

  cameraTimeline = gsap.timeline();
}

function onWindowResize() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  timelineArray =
    window.innerWidth < 768
      ? [
          { x: 1, y: 2.9, z: 7.5 },
          { x: 0, y: 3.5, z: 10 },
          { x: 0, y: 3.5, z: 10 },
          { x: -1, y: 2, z: 12 },
          { x: 0, y: 0, z: 10 },
          { x: -0.75, y: 0, z: 10 },
          { x: -0.75, y: 1.5, z: 10 },
        ]
      : window.innerWidth < 1024
      ? [
          { x: 1, y: 2.5, z: 4 },
          { x: 1, y: 2.5, z: 8 },
          { x: -0.5, y: 3, z: 8 },
          { x: -0.75, y: 1.5, z: 7.5 },
          { x: 0, y: 1, z: 6.5 },
          { x: -0.75, y: 2, z: 8 },
          { x: -1, y: 2, z: 8 },
        ]
      : [
          { x: 1, y: 2.5, z: 3.5 },
          { x: 2.5, y: 1.5, z: 4.5 },
          { x: -1.5, y: 1.5, z: 5 },
          { x: -2, y: 1.5, z: 6 },
          { x: 1.5, y: 1.5, z: 6.5 },
          { x: 1.5, y: 1.5, z: 6.5 },
          { x: -1.5, y: 1.5, z: 5 },
        ];
  camera.position.set(
    timelineArray[timelineIndex].x,
    timelineArray[timelineIndex].y,
    timelineArray[timelineIndex].z
  );
  camera.updateProjectionMatrix();
  renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame(animate);
  animationMixer.update(0.005 * scrollDown);
  animationAction.paused = false;
  if (
    lowerTimeLimit <= animationAction.time &&
    upperTimeLimit >= animationAction.time
  ) {
    animationAction.paused = true;
    return;
  }
  renderer.render(scene, camera);
}

window.playAnimation = (direction, scrollToSection) => {
  switch (scrollToSection) {
    case "landing":
      lowerTimeLimit = 0;
      upperTimeLimit = 0.05;
      break;
    case "skills":
      lowerTimeLimit = 1.5;
      upperTimeLimit = 1.55;
      break;
    case "projects":
      lowerTimeLimit = 2.5;
      upperTimeLimit = 2.55;
      break;
    case "experience":
      lowerTimeLimit = 4.25;
      upperTimeLimit = 4.3;
      break;
    case "education":
      lowerTimeLimit = 5.5;
      upperTimeLimit = 5.55;
      break;
    case "hobby":
      lowerTimeLimit = 6.5;
      upperTimeLimit = 6.55;
      break;
    case "contact":
      lowerTimeLimit = 8.45;
      upperTimeLimit = 8.5;
      break;
  }
  scrollDown = direction;
  animate();
  timelineIndex += direction;
  cameraTimeline.to(camerCoords, {
    x: timelineArray[timelineIndex].x,
    y: timelineArray[timelineIndex].y,
    z: timelineArray[timelineIndex].z,
    ease: "slow(0.7,0.7,false)",
    onUpdate: () => {
      camera.position.set(camerCoords.x, camerCoords.y, camerCoords.z);
    },
  });
};
