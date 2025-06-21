"use client";

import OnKeyDown from "./EventListener";

export default function TerminalBody() {
  return (
    <>
      <div
        id="terminal-body"
        className="h-[92.5%] w-full bg-slate-700 overflow-y-auto p-5 text-white font-extralight"
      >
        <p className="w-full h-fit mb-2 font-tInput">
          Type "help" to show a list of available commands.
        </p>
        <div className="w-[98%] h-fit flex flex-start py-2">
          <div className="w-fit flex items-center mr-4 h-fit">
            <div className="w-fit min-w-28 text-black bg-yellow-400 px-2 font-semibold font-tInput h-fit">
              akshat-garg
            </div>
            <div className="h-fit relative text-3xl font-bold text-yellow-500 flex items-center">
              &gt;
            </div>
          </div>
          <input
            className="w-4/5 bg-slate-700 focus:outline-none border-none text-green-500 font-normal font-tInput"
            type="text"
            autoFocus
            onKeyDown={(event) => {
              OnKeyDown(event);
            }}
          />
        </div>
      </div>
    </>
  );
}
