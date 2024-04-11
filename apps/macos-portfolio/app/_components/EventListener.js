import ArrowDownKey from "./ArrowDownKey";
import ArrowUpKey from "./ArrowUpKey";
import EnterKey from "./EnterKey";

export default function OnKeyDown(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    EnterKey(event);
  } else if (event.key === "ArrowUp") {
    ArrowUpKey(event);
  } else if (event.key === "ArrowDown") {
    ArrowDownKey(event);
  }
}
