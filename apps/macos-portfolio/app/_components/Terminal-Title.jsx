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
          <div className="rounded-full cursor-pointer bg-green-500 size-3" />
        </div>
        <p className="text-center h-full w-11/12">Akshat Garg</p>
      </div>
    </>
  );
}
