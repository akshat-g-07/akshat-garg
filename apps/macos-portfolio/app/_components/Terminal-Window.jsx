import TerminalBody from "./Terminal-Body";
import TerminalTitle from "./Terminal-Title";

export default function TerminalWindow() {
  return (
    <>
      <div
        id="terminal"
        className="h-full w-full rounded-md absolute min-h-10 min-w-64 drop-shadow-lg resize overflow-auto"
      >
        <TerminalTitle />
        <TerminalBody />
      </div>
    </>
  );
}
