"use client";

import Image from "next/image";
import CommandsList from "./CommandsList.json";
import { HelpCommand, AboutCommand } from "./Command-Values";
import OnKeyDown from "./EventListener";

export default function TerminalBody() {
  console.log(CommandsList);
  return (
    <>
      <div
        id="terminal-body"
        className="h-[92.5%] w-full bg-blue-500 overflow-y-auto"
        style={{
          scrollbarColor: "rgb(75 85 99) rgb(31 41 55)", // thumb color track color
          scrollbarWidth: "thin",
        }}
      >
        <p className="w-full h-fit">
          Type "help" to show a list of available commands.
        </p>
        <div className="w-[98%] bg-green-500 h-fit flex terminal-command-line">
          <div className="w-1/5 bg-red-500 flex items-center pl-3">
            <div className="w-fit bg-yellow-400 pr-2">akshat-garg</div>
            <div className="h-6 w-5 bg-white relative">
              <Image src="/triangle.png" fill={true} alt="Terminal Triangle" />
            </div>
          </div>
          <input
            className="w-4/5 bg-white focus:outline-none border-none"
            type="text"
            onKeyDown={(event) => {
              OnKeyDown(event);
              //   console.log("key->", event.key);
              //   console.log("value->", event.target.value);
              //   if (event.key === "Enter") {
              //     event.preventDefault();

              //     const node = document.createElement("div");
              //     switch (event.target.value) {
              //       case "help":
              //         node.innerText = HelpCommand();
              //         break;
              //       case "about":
              //         node.innerText = AboutCommand();

              //         break;

              //       default:
              //         break;
              //     }
              //     document.getElementById("terminal-body").appendChild(node);
              //     const clone = document
              //       .getElementsByClassName("terminal-command-line")[0]
              //       .cloneNode(true);

              //     clone.querySelector("input").value = "";
              //     clone
              //       .querySelector("input")
              //       .addEventListener("keydown", (event) => {
              //         console.log(
              //           "-------->key down clone",
              //           event.target.value,
              //           event.key
              //         );
              //       });

              //     document.getElementById("terminal-body").appendChild(clone);
              //   }
            }}
          />
        </div>
      </div>
    </>
  );
}
