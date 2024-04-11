"use client";

export default function TerminalTitle() {
  return (
    <>
      <div className="h-[7.5%] w-full flex bg-lime-300 rounded-t-md">
        <div className="flex w-1/12 h-full items-center justify-evenly bg-black">
          <div
            className="rounded-full cursor-pointer bg-red-500 size-3"
            onClick={() => {
              document.getElementById("terminal").remove();
              sessionStorage.removeItem("commandIndx");
              sessionStorage.removeItem("commandsHistory");
              sessionStorage.removeItem("currentCommand");
            }}
          />
          <div
            className="rounded-full cursor-pointer bg-yellow-500 size-3"
            onClick={() => {
              const terminalbody = document.getElementById("terminal-body");
              if (terminalbody.classList.contains("MINIMIZED")) {
                terminalbody.classList.remove("MINIMIZED");
                terminalbody.classList.remove("h-0");
                terminalbody.classList.remove("overflow-y-hidden");
                terminalbody.classList.add("h-[92.5%]");
                terminalbody.classList.add("pb-5");
                terminalbody.classList.add("overflow-y-auto");
              } else {
                terminalbody.classList.add("MINIMIZED");
                terminalbody.classList.add("h-0");
                terminalbody.classList.add("overflow-y-hidden");
                terminalbody.classList.remove("h-[92.5%]");
                terminalbody.classList.remove("pb-5");
                terminalbody.classList.remove("overflow-y-auto");
              }
            }}
          />
          <div
            className="rounded-full cursor-pointer bg-green-500 size-3"
            onClick={() => {
              const terminal = document.getElementById("terminal");
              if (terminal.classList.contains("MAX_SIZE")) {
                terminal.classList.remove("MAX_SIZE");
                terminal.classList.remove("w-full");
                terminal.classList.remove("h-full");
                terminal.classList.add("w-4/6");
                terminal.classList.add("h-3/4");
                terminal.classList.add("translate-x-1/4");
                terminal.classList.add("translate-y-[10%]");
              } else {
                terminal.classList.add("MAX_SIZE");
                terminal.classList.add("w-full");
                terminal.classList.add("h-full");
                terminal.classList.remove("w-4/6");
                terminal.classList.remove("h-3/4");
                terminal.classList.remove("translate-x-1/4");
                terminal.classList.remove("translate-y-[10%]");
              }
            }}
          />
        </div>
        <p className="text-center h-full w-11/12">Akshat Garg</p>
      </div>
    </>
  );
}
