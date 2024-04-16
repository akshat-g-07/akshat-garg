import {
  Help,
  About,
  Skills,
  Education,
  Experience,
  Projects,
  Achievements,
  Mail,
} from "./Command-Values";
import OnKeyDown from "./EventListener";

export default function EnterKey(event) {
  const parentElement = document.getElementById("terminal-body");

  const inputElements = parentElement.querySelectorAll("input");

  let commandsArr = sessionStorage.getItem("commandsHistory")
    ? [...JSON.parse(sessionStorage.getItem("commandsHistory"))]
    : [];
  let commandIndx = commandsArr.length;
  commandsArr.push(inputElements[inputElements.length - 1].value);
  commandIndx += 1;

  sessionStorage.setItem("commandsHistory", JSON.stringify(commandsArr));
  sessionStorage.setItem("commandIndx", commandIndx);

  const commandOutputNode = document.createElement("div");
  switch (event.target.value) {
    case "clear":
      while (parentElement.hasChildNodes()) {
        parentElement.removeChild(parentElement.firstChild);
      }
      break;
    case "help":
      commandOutputNode.innerHTML = Help();
      break;
    case "about":
      commandOutputNode.innerText = About();
      break;
    case "skills":
      commandOutputNode.appendChild(Skills());
      break;
    case "education":
      commandOutputNode.innerText = Education();
      break;
    case "experience":
      commandOutputNode.innerText = Experience();
      break;
    case "projects":
      commandOutputNode.appendChild(Projects());
      break;
    case "achievements":
      commandOutputNode.innerText = Achievements();
      break;
    case "resume":
      const resumeLink = document.createElement("a");
      resumeLink.href = "/resume/Akshat_Full_Stack_Resume.pdf";
      resumeLink.download = "Akshat_Full_Stack_Resume";
      resumeLink.click();
      break;
    case "github":
      window.open("https://github.com/akshat-g-07", "_blank");
      break;
    case "linkedin":
      window.open(
        "https://www.linkedin.com/in/akshat-garg-580322241/",
        "_blank"
      );
      break;
    case "x":
      window.open("https://twitter.com/akku_g__", "_blank");
      break;
    case "mail":
      commandOutputNode.innerText = Mail();
      break;

    default:
      commandOutputNode.innerText = `Command not found. Type "help" to show a list of available commands.`;
      break;
  }
  parentElement.appendChild(commandOutputNode);

  const terminalNode = document.createElement("div");
  terminalNode.classList = "w-[98%] h-fit flex flex-start py-2";
  terminalNode.innerHTML = `
    <div class="w-fit flex items-center mr-4">
      <div class="w-fit min-w-28 text-black bg-yellow-400 px-2 font-semibold">akshat-garg</div>
      <div class="h-6 w-5 relative">
        <img src="/triangle.png" fill={true} alt="Terminal Triangle" />
      </div>
    </div>
    <input
      class="w-4/5 bg-slate-700 focus:outline-none border-none text-green-500 font-normal"
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
