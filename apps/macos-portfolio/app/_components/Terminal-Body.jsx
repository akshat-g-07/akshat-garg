"use client";

import Image from "next/image";
import OnKeyDown from "./EventListener";

export default function TerminalBody() {
  return (
    <>
      <div
        id="terminal-body"
        className="h-[92.5%] w-full bg-blue-500 overflow-y-auto pb-5"
      >
        <p className="w-full h-fit">
          Type "help" to show a list of available commands.
        </p>
        <div className="w-[98%] bg-green-500 h-fit flex flex-start py-2">
          <div className="w-fit bg-red-500 flex items-center px-2">
            <div className="w-fit min-w-28 bg-yellow-400 pr-2">akshat-garg</div>
            <div className="h-6 w-5 bg-white relative">
              <Image src="/triangle.png" fill={true} alt="Terminal Triangle" />
            </div>
          </div>
          <input
            className="w-4/5 bg-white focus:outline-none border-none"
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
