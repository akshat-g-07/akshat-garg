"use client";

import Image from "next/image";
import Commands from "./Commands.json";
import { HelpCommand, AboutCommand } from "./Command-Values";

export default function TerminalBody() {
  console.log(Commands);
  return (
    <>
      <div id="terminal-body" className="h-[92.5%] w-full bg-blue-500">
        <p className="w-full h-fit">
          Type "help" to show a list of available commands.
        </p>
        <div className="w-full h-fit flex">
          <div className="w-2/12 flex items-center">
            <div className="w-fit bg-yellow-400 pr-2">akshat-garg</div>
            <div className="h-6 w-5 relative">
              <Image src="/triangle.png" fill={true} alt="Terminal Triangle" />
            </div>
          </div>
          <input
            className="w-10/12 bg-white focus:outline-none border-none"
            type="text"
            onKeyDown={(event) => {
              console.log("key->", event.key);
              console.log("value->", event.target.value);
              if (event.key === "Enter") {
                event.preventDefault();

                const node = document.createElement("div");
                switch (event.target.value) {
                  case "help":
                    node.innerText = HelpCommand();
                    break;
                  case "about":
                    node.innerText = AboutCommand();

                    break;

                  default:
                    break;
                }
                document.getElementById("terminal-body").appendChild(node);
              }
            }}
          />
        </div>
      </div>
    </>
  );
}
