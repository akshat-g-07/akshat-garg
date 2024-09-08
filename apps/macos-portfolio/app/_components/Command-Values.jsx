import { Skills } from "@repo/portfolio-details";

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
  return "Hey there!\nI am Akshat Garg, alumnus of NIT Patna. I am an experienced full stack developer proficient with Dot Net Tech Stack. I really thrive to develop something meaningful!";
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
  return "I'm proud to be an alumnus of NIT Patna, where I completed my B.Tech degree from 2017 to 2021.";
}

export function ExperienceFunction() {
  return "-> I have been making a difference at Infosys Limited on the role of Specialist Programmer since Aug'21.";
}

export function ProjectsFunction() {
  const projectsNode = document.createElement("div");
  projectsNode.classList = "w-full h-fit";
  projectsNode.innerHTML = ` <div class="w-full h-fit">
  <div class="w-full h-fit flex items-center">
    <div class="w-10/12 h-fit flex">
      =========================================
      <br />
      TrekLicious | ReactJS, NodeJS, Express, MongoDB, MUI
      <br />
      =========================================
    </div>
    <div class="w-2/12 h-fit flex">
      <a href="https://treklicious.onrender.com/" class="font-bold target="_blank">
        (Live)
      </a>
    </div>
  </div>
  <div class="w-full h-fit">
    <ul class="list-disc list-inside">
      <li>
      Developed a preference-based full-stack web application with a user-friendly interface that caters to trek lovers.
      </li>
      <li>
      Implemented user authentication system using JWT, allowing users to securely signup, login and update their profiles.
      </li>
      <li>
        The website’s main objective is to assist trek lovers in determining
        the appropriate treks for themselves.
      </li>
      <li>
        User can also create a favorite list and add/remove items from their
        list.
      </li>
    </ul>
  </div>
</div>
<div class="w-full h-fit">
<div class="w-full h-fit flex items-center">
    <div class="w-10/12 h-fit flex">
      =========================================
      <br />
      RatVenture | ReactJs, NodeJS, Express, Javascript
      <br />
      =========================================
    </div>
    <div class="w-2/12 h-fit flex">
      <a href="https://rat-frontend.onrender.com/" class="font-bold target="_blank">
        (Live)
      </a>
    </div>
  </div>
  <div class="w-full h-fit">
    <ul class="list-disc list-inside">
      <li>
      Visualization of famous Rat-In-A-Maze problem.
      </li>
      <li>
      Engineered an interactive interface empowering users to dynamically configure matrix dimensions, starting point, blocks, and destination point.
      </li>
      <li>
      Incorporated functionality for users to opt for random generation of the aforementioned parameters, enhancing flexibility and user experience.
      </li>
      <li>
      User will be able to see all the viable routes from starting point to destination point.
      </li>
    </ul>
  </div>
</div>
</div>
<div class="w-full h-fit">
<div class="w-full h-fit flex items-center">
    <div class="w-10/12 h-fit flex">
      =========================================
      <br />
      GrillZilla | ReactJs, API, Axios
      <br />
      =========================================
    </div>
    <div class="w-2/12 h-fit flex">
      <a href="https://restaurant-bulc.onrender.com/" class="font-bold target="_blank">
        (Live)
      </a>
    </div>
  </div>
  <div class="w-full h-fit">
    <ul class="list-disc list-inside">
      <li>
      A frontend application to show the menu of the restaurant incorporating API integration.
      </li>
      <li>
      Implemented Axios API to acquire user’s location and show him the restaurants closest to him.
      </li>
      <li>
      Using Google Maps API user can see the directions to the restaurant location from his/her.
      </li>
    </ul>
  </div>
</div>
</div>
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
