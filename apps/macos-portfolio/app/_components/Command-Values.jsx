export function Help() {
  return "clear\t-\tclear the screen\nhelp\t-\tlist all the commands\nabout\t-\tabout Akshat Garg\nskills\t-\tshow skills\neducation\t-\tshow education\nexperience\t-\tshow experience\nprojects\t-\tshow projects\nresume\t-\tdownload resume\ngithub\t-\topen github\nlinkedin\t-\topen linkedin\nx\t-\topen x(twitter)\nmail\t-\tshow e-mail";
}

export function About() {
  return "An experienced web developer who really enjoys creating websites.  I can endlessly talk about web development using different JS libraries/frameworks. I really thrive to develop something meaningful!";
}

export function Skills() {
  const skillsNode = document.createElement("div");
  skillsNode.classList = "w-full h-fit bg-green-500 flex";
  skillsNode.innerHTML = `<div class="h-fit w-1/2">
      <div class="h-fit w-full flex">
        <div class="h-1 w-1/5">
          <img src="/skills/chakra.png" width="25" height="25"/>
        </div>
        <div class="h-fit w-4/5">Chakra UI</div>
      </div>
    </div>
    <div class="h-fit w-1/2">
    <div class="h-fit w-full flex">
      <div class="h-1 w-1/5">
        <img src="/skills/chakra.png" width="25" height="25"/>
      </div>
      <div class="h-fit w-4/5">Chakra UI</div>
    </div>
  </div>
   `;
  return skillsNode;
}
