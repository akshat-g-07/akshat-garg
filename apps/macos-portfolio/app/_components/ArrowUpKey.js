export default function ArrowUpKey(event) {
  const commandIndx = parseInt(sessionStorage.getItem("commandIndx"));
  const commandsHistory = JSON.parse(sessionStorage.getItem("commandsHistory"));
  if (commandIndx > 0) {
    const inputElements = document
      .getElementById("terminal-body")
      .querySelectorAll("input");

    if (commandIndx === commandsHistory.length) {
      sessionStorage.setItem(
        "currentCommand",
        inputElements[inputElements.length - 1].value
      );
    }
    inputElements[inputElements.length - 1].value =
      commandsHistory[commandIndx - 1];
    sessionStorage.setItem("commandIndx", commandIndx - 1);
  }
}
