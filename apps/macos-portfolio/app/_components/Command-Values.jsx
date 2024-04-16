export function Help() {
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

export function About() {
  return "Hey there!\nI am Akshat Garg, alumnus of NIT Patna. I am an experienced web developer who really enjoys creating websites.  I can endlessly talk about web development using different JS libraries/frameworks. I really thrive to develop something meaningful!";
}

export function Skills() {
  const skillsNode = document.createElement("div");
  skillsNode.classList = "w-full h-fit flex";
  skillsNode.innerHTML = `
<div class="h-fit w-1/2">
  <div class="h-6 w-full flex">
    <div class="h-full w-1/5 flex items-center justify-center">
      <img src="/skills/nextjs.png" width="15" height="15"/>
    </div>
    <div class="h-full w-4/5">Next JS</div>
  </div>
  <div class="h-6 w-full flex">
    <div class="h-full w-1/5 flex items-center justify-center">
      <img src="/skills/nodejs.png" width="15" height="15"/>
    </div>
  <div class="h-full w-4/5">Node JS</div>
  </div>
  <div class="h-6 w-full flex">
    <div class="h-full w-1/5 flex items-center justify-center">
      <img src="/skills/mongodb.png" width="15" height="15"/>
    </div>
    <div class="h-full w-4/5">Mongo DB</div>
  </div>
  <div class="h-6 w-full flex">
    <div class="h-full w-1/5 flex items-center justify-center">
      <img src="/skills/vite.png" width="15" height="15"/>
    </div>
    <div class="h-full w-4/5">Vite JS</div>
  </div>
  <div class="h-6 w-full flex">
    <div class="h-full w-1/5 flex items-center justify-center">
      <img src="/skills/tailwind.png" width="15" height="15"/>
    </div>
    <div class="h-full w-4/5">Tailwind CSS</div>
  </div>
  <div class="h-6 w-full flex">
    <div class="h-full w-1/5 flex items-center justify-center">
      <img src="/skills/git.png" width="15" height="15"/>
    </div>
    <div class="h-full w-4/5">Git</div>
  </div>
</div>
<div class="h-fit w-1/2">
  <div class="h-6 w-full flex">
    <div class="h-full w-1/5 flex items-center justify-center">
        <img src="/skills/reactjs.png" width="15" height="15"/>
    </div>
    <div class="h-full w-4/5">React JS</div>
    </div>
    <div class="h-6 w-full flex">
      <div class="h-full w-1/5 flex items-center justify-center">
        <img src="/skills/expressjs.png" width="15" height="15"/>
      </div>
      <div class="h-full w-4/5">Express JS</div>
    </div>
  <div class="h-6 w-full flex">
    <div class="h-full w-1/5 flex items-center justify-center">
      <img src="/skills/postgresql.png" width="15" height="15"/>
    </div>
    <div class="h-full w-4/5">PostgreSQL</div>
  </div>
  <div class="h-6 w-full flex">
  <div class="h-full w-1/5 flex items-center justify-center">
    <img src="/skills/prisma.png" width="15" height="15"/>
  </div>
  <div class="h-full w-4/5">Prisma</div>
  </div>
  <div class="h-6 w-full flex">
  <div class="h-full w-1/5 flex items-center justify-center">
    <img src="/skills/sass.png" width="15" height="15"/>
  </div>
  <div class="h-full w-4/5">SASS</div>
  </div>
  <div class="h-6 w-full flex">
  <div class="h-full w-1/5 flex items-center justify-center">
    <img src="/skills/github.png" width="15" height="15"/>
  </div>
  <div class="h-full w-4/5">Github</div>
  </div>
</div>
  </div>
   `;
  return skillsNode;
}

export function Education() {
  return "I'm proud to be an alumnus of NIT Patna, where I completed my B.Tech degree from 2017 to 2021.";
}

export function Experience() {
  return "-> I have been making a difference at Infosys Limited on the role of Specialist Programmer since Aug'21.";
}

export function Projects() {
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

export function Achievements() {
  return `↪ Make-a-thon 16 | Finalists
  ≕ Successfully led a team of 4 to the finals of Infosys’s prestigious Hackathon event where brightest minds showcase their skills.
  ≕  Leveraged expertise in full-stack development and picked a PS where we had to develop a Bidding Platform from scratch, showcasing proficiency in both frontend and backend.
  ≕ Designed and implemented the platform using a Microservices architecture to build a robust product.
  `;
}

export function Mail() {
  return "akshatg805@gmail.com";
}
