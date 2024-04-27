import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import gsap from "gsap";

const ThreeDModel = ({ scrollTo, scrollDown, transitionTime }) => {
  const animationMixerRef = useRef(null);
  const animationActionRef = useRef(null);
  const renderer = useRef(null);

  const scrollToRef = useRef(scrollTo);
  scrollToRef.current = scrollTo;
  const scrollDownRef = useRef(scrollDown);
  scrollDownRef.current = scrollDown;
  const elapsedTime = useRef(0);

  const cameraTimeline = useRef(null);
  const cameraCoords = useRef({ x: 5, y: 5, z: 20 });

  const timelineArray = useRef(null);

  timelineArray.current =
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
  const timelineIndx = useRef(0);

  useEffect(() => {
    const canvasElement = document.querySelector(".webgl");
    renderer.current = new THREE.WebGLRenderer({
      canvas: canvasElement,
      alpha: true,
    });
    renderer.current.setPixelRatio(2);
    renderer.current.setSize(window.innerWidth, window.innerHeight);
  }, []);

  const scene = new THREE.Scene();

  const camera = useRef(null);
  camera.current = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.current.position.set(
    cameraCoords.current.x,
    cameraCoords.current.y,
    cameraCoords.current.z
  );

  cameraTimeline.current = gsap.timeline();

  if (scrollDownRef.current === 0) {
    cameraTimeline.current.to(cameraCoords.current, {
      x: timelineArray.current[0].x,
      y: timelineArray.current[0].y,
      z: timelineArray.current[0].z,
      duration: 2,
      onUpdate: () => {
        camera.current.position.set(
          cameraCoords.current.x,
          cameraCoords.current.y,
          cameraCoords.current.z
        );
      },
      onComplete: () => {
        cameraTimeline.current.pause();
      },
    });
  }

  useEffect(() => {
    if (scrollToRef.current === "transition") {
      timelineIndx.current += scrollDownRef.current;
      cameraTimeline.current.to(cameraCoords.current, {
        x: timelineArray.current[timelineIndx.current].x,
        y: timelineArray.current[timelineIndx.current].y,
        z: timelineArray.current[timelineIndx.current].z,
        duration: transitionTime,
        ease: "slow(0.7, 0.7, false)",
        onUpdate: () => {
          camera.current.position.set(
            cameraCoords.current.x,
            cameraCoords.current.y,
            cameraCoords.current.z
          );
        },
      });
    }
  }, [transitionTime, scrollDownRef.current]);

  const spotLight = new THREE.SpotLight(0xffffff, 100);
  spotLight.position.set(0, 5, 2);
  spotLight.penumbra = 1;
  spotLight.castShadow = true;
  spotLight.shadow.focus = 1;
  scene.add(spotLight);

  const charLoader = new GLTFLoader().load("models/character.glb", (gltf) => {
    const character = gltf.scene;
    character.castShadow = true;
    character.scale.set(1.5, 1.5, 1.5);
    character.position.set(0, 0, 0);
    scene.add(character);

    const animLoader = new FBXLoader().load("models/animation.fbx", (fbx) => {
      animationMixerRef.current = new THREE.AnimationMixer(character);

      const animationClip = fbx.animations[0];
      animationActionRef.current =
        animationMixerRef.current.clipAction(animationClip);

      animationActionRef.current.play();

      animate();
    });
  });

  const animate = () => {
    requestAnimationFrame(animate);
    animationMixerRef.current.update(0.001 * scrollDownRef.current);

    if (scrollToRef.current === "transition") {
      animationActionRef.current.paused = false;
    }

    if (!animationActionRef.current.paused) {
      animationActionRef.current.time = elapsedTime.current;
      elapsedTime.current += 0.001 * scrollDownRef.current;
    } else {
      elapsedTime.current = animationActionRef.current.time;
    }

    if (
      scrollToRef.current === "landing" &&
      animationActionRef.current.time >= 0 &&
      animationActionRef.current.time <= 0.05
    ) {
      animationActionRef.current.paused = true;
    }
    if (
      scrollToRef.current === "skills" &&
      animationActionRef.current.time >= 1.5 &&
      animationActionRef.current.time <= 1.55
    ) {
      animationActionRef.current.paused = true;
    }
    if (
      scrollToRef.current === "projects" &&
      animationActionRef.current.time >= 2.5 &&
      animationActionRef.current.time <= 2.55
    ) {
      animationActionRef.current.paused = true;
    }
    if (
      scrollToRef.current === "experience" &&
      animationActionRef.current.time >= 4.25 &&
      animationActionRef.current.time <= 4.3
    ) {
      animationActionRef.current.paused = true;
    }
    if (
      scrollToRef.current === "education" &&
      animationActionRef.current.time >= 5.5 &&
      animationActionRef.current.time <= 5.55
    ) {
      animationActionRef.current.paused = true;
    }
    if (
      scrollToRef.current === "hobby" &&
      animationActionRef.current.time >= 6.5 &&
      animationActionRef.current.time <= 6.55
    ) {
      animationActionRef.current.paused = true;
    }
    if (
      scrollToRef.current === "contact" &&
      animationActionRef.current.time >= 8.45 &&
      animationActionRef.current.time <= 8.5
    ) {
      animationActionRef.current.paused = true;
    }

    render();
  };

  const render = () => {
    renderer.current && renderer.current.render(scene, camera.current);
  };

  render();

  window.addEventListener("resize", () => {
    camera.current.aspect = window.innerWidth / window.innerHeight;
    camera.current.updateProjectionMatrix();
    renderer.current &&
      renderer.current.setSize(window.innerWidth, window.innerHeight);
    timelineArray.current =
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
    camera.current.position.set(
      timelineArray.current[timelineIndx.current].x,
      timelineArray.current[timelineIndx.current].y,
      timelineArray.current[timelineIndx.current].z
    );
  });

  return (
    <>
      <canvas
        className="webgl fixed top-0 -z-10"
        style={{ backgroundColor: "rgb(13,5,26)" }}
      />
    </>
  );
};

export default ThreeDModel;
