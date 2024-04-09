export function Help() {
  return "clear\t-\tclear the screen\nhelp\t-\tlist all the commands\nabout\t-\tabout Akshat Garg\nskills\t-\tshow skills\neducation\t-\tshow education\nexperience\t-\tshow experience\nprojects\t-\tshow projects\nachievements\t-\tshow achievements\nresume\t-\tdownload resume\ngithub\t-\topen github\nlinkedin\t-\topen linkedin\nx\t-\topen x(twitter)\nmail\t-\tshow e-mail";
}

export function About() {
  return "An experienced web developer who really enjoys creating websites.  I can endlessly talk about web development using different JS libraries/frameworks. I really thrive to develop something meaningful!";
}

export function Skills() {
  const skillsNode = document.createElement("div");
  skillsNode.classList = "w-full h-fit bg-green-500 flex";
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
  return "I am an alumnus of NIT Patna(2017-21).";
}

export function Experience() {
  return "-> Infosys Limited | Specialist Programmer | Aug'21 - Present";
}

export function Projects() {
  return `  =========================================<br/>TrekLicious | ReactJS, NodeJS, Express, MongoDB, MUI &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;<a href="https://treklicious.onrender.com/" target="_blank">(Live)</a>
  =========================================<br/>
• Developed a preference-based full-stack web application with a user-friendly interface that caters 
to trek lovers. <br/>
• Implemented user authentication system using JWT, allowing users to securely signup, login and 
update they profiles.<br/>
• The website’s main objective is to assist trek lovers in determining the appropriate treks for 
themselves.<br/>
• User can also create a favorite list and add/remove items from their list.
<br/>
=====================================<br/>
RatVenture | ReactJs, NodeJS, Express, Javascript
&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;<a href="https://rat-frontend.onrender.com/" target="_blank">(Live)</a>
<br/>
=====================================<br/>
• Visualization of famous Rat-In-A-Maze problem.<br/>
• Engineered an interactive interface empowering users to dynamically configure matrix
dimensions, starting point, blocks, and destination point.<br/>
• Incorporated functionality for users to opt for random generation of the aforementioned 
parameters, enhancing flexibility and user experience.<br/>
• User will be able to see all the viable routes from starting point to destination point.
<br/>
======================<br/>
GrillZilla | ReactJs, API, Axios
&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;<a href="https://restaurant-bulc.onrender.com/" target="_blank">(Live)</a>
<br/>
======================<br/>
• A frontend application to show the menu of the restaurant incorporating API integration.<br/>
• Implemented Axios API to acquire user’s location and show him the restaurants closest to him.<br/>
• Using Google Maps API user can see the directions to the restaurant location from his/her
  `;
}

export function Achievements() {
  return `↪ Make-a-thon 16 | Finalists
  ≕ Successfully led a team of 4 to the finals of Infosys’s prestigious Hackathon event where brightest minds showcase their skills.
  ≕  Leveraged expertise in full-stack development and picked a PS where we had to develop a Bidding Platform from scratch, showcasing proficiency in both frontend and backend.
  ≕ Designed and implemented the platform using a Microservices architecture to build a robust product.
  `;
}

export function Mail() {
  return "dummy@mail.com";
}
