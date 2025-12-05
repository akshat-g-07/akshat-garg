import {
  About,
  Achievements,
  Contact,
  Education,
  Experience,
  Projects,
  Skills,
} from "@repo/portfolio-details";
import { parseCookies } from "nookies";

export function HelpFunction() {
  const cookies = parseCookies();
  const ref = cookies.ref;
  return `<table style="width:50%; text-align: left;">
  <tr>
    <th>Command</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>clear</td>
    <td>Clear the screen</td>
  </tr>
  <tr>
    <td>help</td>
    <td>List all the commands</td>
  </tr>
  <tr>
    <td>about</td>
    <td>About Akshat Garg</td>
  </tr>
  <tr>
    <td>skills</td>
    <td>Show skills</td>
  </tr>
  <tr>
    <td>education</td>
    <td>Show education</td>
  </tr>
  <tr>
    <td>experience</td>
    <td>Show experience</td>
  </tr>
  <tr>
    <td>projects</td>
    <td>Show projects</td>
  </tr>
  <tr>
    <td>achievements</td>
    <td>Show achievements</td>
  </tr>
  <tr>
    <td>resume</td>
    <td>Download resume</td>
  </tr>
  <tr>
    <td>github</td>
    <td>Open GitHub</td>
  </tr>
  <tr>
    <td>linkedin</td>
    <td>Open LinkedIn</td>
  </tr>
  ${
    ref !== "rec"
      ? `<tr>
        <td>x</td>
        <td>Open X (Twitter)</td>
      </tr>`
      : ``
  }
  <tr>
    <td>mail</td>
    <td>Show e-mail</td>
  </tr>
</table>`;
}

export function AboutFunction() {
  return About;
}

export function SkillsFunction() {
  const skillsNode = document.createElement("div");
  skillsNode.classList = "w-full h-fit flex";
  skillsNode.innerHTML = `
  <div class="w-full h-fit flex flex-wrap">
    ${Skills.map(
      (skill) => `
      <div class="h-6 w-1/2 flex">
        <div class="h-full w-1/5 flex items-center justify-center">
          <img src="/skills/${skill.imgName}" width="15" height="15" />
        </div>
        <div class="h-full w-4/5">${skill.name}</div>
      </div>
    `
    ).join("")}
  </div>
  `;
  return skillsNode;
}

export function EducationFunction() {
  const educationNode = document.createElement("div");
  educationNode.classList = "w-full h-fit";
  educationNode.innerHTML = `
  <h3 class="font-semibold text-lg">
    ${Education.instituteFullName}
  </h3>
  <div class="w-full flex justify-between items-center">
    <p>${Education.degree}</p>
    <p>(${Education.duration})</p>
  </div>
  `;
  return educationNode;
}

export function ExperienceFunction() {
  const experienceNode = document.createElement("div");
  experienceNode.classList = "w-full h-fit";
  experienceNode.innerHTML = Experience.map(
    (experience, indx) => `
  <div key={${indx}}>
    <h3 class="font-semibold text-lg">
      ${experience.role}
    </h3>
    <p class="font-medium mt-2 mb-4 text-gray-400">
      ${experience.company} | ${experience.duration}
    </p>
    <ul class="list-disc list-inside">
    ${experience.description.map((item, index) => `<li key=${index} class="my-1 text-gray-200">${item}</li>`).join("")}
    </ul>
  </div>
  `
  );
  return experienceNode;
}

export function ProjectsFunction() {
  const projectsNode = document.createElement("div");
  projectsNode.classList = "w-full h-fit space-y-4";
  projectsNode.innerHTML = ` 
  ${Projects.map(
    (project, index) =>
      `<div key=${index} class="text-zinc-400">
      <div class="flex justify-between">
        <div class="flex">
        <p class="font-semibold text-xl text-white">${project.name}</p>
        <p>&nbsp;|</p>
        ${project.skills.map((skill, indx) => `<p key=${indx} class="text-xs flex items-center">&nbsp;${skill}</p>`).join(",")}
        </div>
        <a href=${project.live} target="_blank">(Live)</a>
      </div>
      <p>=========================================</p>
      <ul class="list-disc list-inside">
      ${project.description.map((point, indx) => `<li key={${indx}} class="text-gray-400">${point}</li>`).join("")}
      </ul>
    </div>`
  ).join("")}
   `;
  return projectsNode;
}

export function AchievementsFunction() {
  const achievementsNode = document.createElement("div");
  achievementsNode.classList = "w-full h-fit space-y-4";
  achievementsNode.innerHTML = ` 
  ${Achievements.map(
    (achievement, index) =>
      `<div key=${index} class="text-zinc-400">
        <div class="flex">
        <p class="font-semibold text-xl text-white">${achievement.title}</p>
        <p>&nbsp;|&nbsp;</p>
        <p class="text-xs flex items-center font-medium text-white">${achievement.position}</p>
        </div>
      <p>=========================================</p>
      <ul class="list-disc list-inside">
      ${achievement.details.map((point, indx) => `<li key={${indx}} class="text-gray-400">${point}</li>`).join("")}
      </ul>
    </div>`
  ).join("")}
   `;
  return achievementsNode;
}

export function MailFunction() {
  return Contact;
}
