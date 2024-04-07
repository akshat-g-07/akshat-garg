import { HelpCommand, AboutCommand } from "./Command-Values";

export default function OnKeyDown(event) {
  console.log("from function", event.key, event.target.value);

  if (event.key === "Enter") {
    event.preventDefault();

    const commandOutputNode = document.createElement("div");
    switch (event.target.value) {
      case "help":
        commandOutputNode.innerText = HelpCommand();
        break;
      case "about":
        commandOutputNode.innerText = AboutCommand();
        break;

      default:
        break;
    }
    const parentElement = document.getElementById("terminal-body");
    parentElement.appendChild(commandOutputNode);
    const terminalNode = document.createElement("div");
    terminalNode.classList.add("w-[98%]");
    terminalNode.classList.add("bg-green-500");
    terminalNode.classList.add("h-fit");
    terminalNode.classList.add("flex");
    terminalNode.classList.add("terminal-command-line");
    parentElement.appendChild(terminalNode);
  }
}
