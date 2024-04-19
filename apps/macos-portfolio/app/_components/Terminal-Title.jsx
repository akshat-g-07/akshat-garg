"use client";

export default function TerminalTitle() {
  return (
    <>
      <div
        id="terminal-title"
        className="h-[7.5%] w-full flex items-center rounded-t-md"
        style={{
          background: "linear-gradient(180deg,#e6e6e6 0,#a3a3a3)",
        }}
      >
        <div className="flex w-1/12 h-full items-center justify-evenly">
          <div
            className="rounded-full cursor-pointer bg-red-500 size-4"
            onClick={() => {
              const notesParent = document.getElementById("notesParent");
              const notes = notesParent.querySelector("#notes");
              const terminalParent = document.getElementById("terminalParent");
              const terminal = terminalParent.querySelector("#terminal");

              sessionStorage.removeItem("commandIndx");
              sessionStorage.removeItem("commandsHistory");
              sessionStorage.removeItem("currentCommand");

              terminal.remove();
              terminalParent.classList.remove("z-10");
              terminalParent.classList.remove("z-0");
              terminalParent.classList.add("-z-10");
              if (notes) {
                notesParent.classList.remove("z-0");
                notesParent.classList.add("z-10");
              }
            }}
          />
          <div
            className="rounded-full cursor-pointer bg-yellow-500 size-4"
            onClick={() => {
              const terminalbody = document.getElementById("terminal-body");
              if (terminalbody.classList.contains("MINIMIZED")) {
                terminalbody.classList.remove("MINIMIZED");
                terminalbody.classList.remove("h-0");
                terminalbody.classList.remove("overflow-y-hidden");
                terminalbody.classList.add("h-[92.5%]");
                terminalbody.classList.add("p-5");
                terminalbody.classList.add("overflow-y-auto");
              } else {
                terminalbody.classList.add("MINIMIZED");
                terminalbody.classList.add("h-0");
                terminalbody.classList.add("overflow-y-hidden");
                terminalbody.classList.remove("h-[92.5%]");
                terminalbody.classList.remove("p-5");
                terminalbody.classList.remove("overflow-y-auto");
              }
            }}
          />
          <div
            className="rounded-full cursor-pointer bg-green-500 size-4"
            onClick={() => {
              const terminal = document.getElementById("terminal");
              if (terminal.classList.contains("MAX_SIZE")) {
                terminal.classList.remove("MAX_SIZE");
                terminal.style.height = "75%";
                terminal.style.width = "67%";
              } else {
                terminal.classList.add("MAX_SIZE");
                terminal.style.height = "100%";
                terminal.style.width = "100%";
                document
                  .getElementById("terminalParent")
                  .querySelector("div").style.transform = "none";
              }
            }}
          />
        </div>
        <h1 className="cursor-default text-center h-fit w-11/12 font-bold text-xl">
          Akshat Garg
        </h1>
      </div>
    </>
  );
}
