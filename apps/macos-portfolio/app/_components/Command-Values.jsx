import {
  About,
  Education,
  Experience,
  Projects,
  Skills,
} from "@repo/portfolio-details";

export function HelpFunction() {
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
  <tr>
    <td>x</td>
    <td>Open X (Twitter)</td>
  </tr>
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
    <p class="font-medium mt-2 mb-4">
      ${experience.company} | ${experience.duration}
    </p>
    ${experience.description.map((item, index) => `<p key={${index} class="my-1"}>• ${item}</p>`).join("")}
  </div>
  `
  );
  return experienceNode;
}

export function ProjectsFunction() {
  const projectsNode = document.createElement("div");
  projectsNode.classList = "w-full h-fit";
  projectsNode.innerHTML = ` 
  ${Projects.map(
    (project, index) =>
      `<div key={${index}} class="text-zinc-400">
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
  return `↪ Make-a-thon 16 | Finalists
  ≕ Successfully led a team of 4 to the finals of Infosys’s prestigious Hackathon event where brightest minds showcase their skills.
  ≕ Leveraged expertise in full-stack development and picked a PS where we had to develop a Bidding Platform from scratch, showcasing proficiency in both frontend and backend.
  ≕ Designed and implemented the platform using a Microservices architecture to build a robust product.
  ↪ Make-a-thon 17 | Semi-Finalists
  ≕ Created a team of 5 and led them from the front to the semi-finals of the event.
  ≕ This time picked a PS where we had to develop a Copilot for the Insurance Domain, to help the testers with their monotonous tasks.
  ≕ Applied prompt engineering techniques to train the model, translating natural language inputs into user-friendly actions.
  `;
}

export function MailFunction() {
  return "akshatg805@gmail.com";
}
