import { Help, About, Skills } from "./Command-Values";

export default function OnKeyDown(event) {
  if (event.key === "Enter") {
    event.preventDefault();

    const commandOutputNode = document.createElement("div");
    switch (event.target.value) {
      case "help":
        commandOutputNode.innerText = Help();
        break;
      case "about":
        commandOutputNode.innerText = About();
        break;
      case "skills":
        commandOutputNode.appendChild(Skills());
        break;

      default:
        break;
    }
    const parentElement = document.getElementById("terminal-body");
    parentElement.appendChild(commandOutputNode);

    const terminalNode = document.createElement("div");
    terminalNode.classList = "w-[98%] bg-green-500 h-fit flex flex-start";
    terminalNode.innerHTML = `
    <div class="w-fit bg-red-500 flex items-center px-2">
      <div class="w-fit bg-yellow-400 pr-2">akshat-garg</div>
      <div class="h-6 w-5 bg-white relative">
        <img src="/triangle.png" fill={true} alt="Terminal Triangle" />
      </div>
    </div>
    <input
      class="w-4/5 bg-white focus:outline-none border-none"
      type="text"
         />
 `;

    const terminalNodeInput = terminalNode.querySelector("input");
    terminalNodeInput.onkeydown = (event) => {
      OnKeyDown(event);
    };

    document.querySelectorAll("input").forEach((item) => {
      item.readOnly = true;
    });

    parentElement.appendChild(terminalNode);
    terminalNode.scrollIntoView();
    terminalNodeInput.focus();
  }
}
