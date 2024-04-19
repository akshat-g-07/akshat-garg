"use client";

import TerminalBody from "./Terminal-Body";
import TerminalTitle from "./Terminal-Title";
import Draggable from "react-draggable";
import { useRef } from "react";

export default function Terminal() {
  const nodeRef = useRef(null);
  return (
    <>
      <Draggable nodeRef={nodeRef} handle="#terminal-title">
        <div
          className="w-full h-full flex items-center justify-center"
          ref={nodeRef}
        >
          <div
            id="terminal"
            className="max-h-full max-w-full rounded-md min-h-10 min-w-64 w-4/6 absolute h-3/4 drop-shadow-lg resize overflow-auto"
          >
            <TerminalTitle />
            <TerminalBody />
          </div>
        </div>
      </Draggable>
    </>
  );
}
