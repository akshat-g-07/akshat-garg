export function Help() {
  return "clear\t-\tclear the screen\nhelp\t-\tlist all the commands\nabout\t-\tabout Akshat Garg\nskills\t-\tshow skills\neducation\t-\tshow education\nexperience\t-\tshow experience\nprojects\t-\tshow projects\nresume\t-\tdownload resume\ngithub\t-\topen github\nlinkedin\t-\topen linkedin\nx\t-\topen x(twitter)\nmail\t-\tshow e-mail";
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
