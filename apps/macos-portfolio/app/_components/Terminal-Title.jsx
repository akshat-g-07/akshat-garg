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
          <div className="rounded-full cursor-pointer bg-yellow-500 size-3" />
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
