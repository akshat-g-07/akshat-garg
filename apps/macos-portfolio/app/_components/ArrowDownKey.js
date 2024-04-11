export default function ArrowDownKey(event) {
  const commandIndx = parseInt(sessionStorage.getItem("commandIndx"));
  const commandsHistory = JSON.parse(sessionStorage.getItem("commandsHistory"));
  if (commandIndx < commandsHistory?.length && !isNaN(commandIndx)) {
    const inputElements = document
      .getElementById("terminal-body")
      .querySelectorAll("input");

    inputElements[inputElements.length - 1].value =
      commandsHistory[commandIndx + 1] ||
      sessionStorage.getItem("currentCommand");
    sessionStorage.setItem("commandIndx", commandIndx + 1);
  }
}
