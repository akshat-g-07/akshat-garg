import TerminalBody from "./Terminal-Body";
import TerminalTitle from "./Terminal-Title";

export default function Terminal() {
  return (
    <>
      <div
        id="terminal"
        className="translate-x-1/4 translate-y-[10%] max-h-full max-w-full rounded-md min-h-10 min-w-64 w-4/6 h-3/4 drop-shadow-lg resize overflow-auto"
      >
        <TerminalTitle />
        <TerminalBody />
      </div>
    </>
  );
}
