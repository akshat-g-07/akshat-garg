"use client";

import Draggable from "react-draggable";
import { useRef } from "react";
import TerminalWindow from "./Terminal-Window";

export default function Terminal() {
  const nodeRef = useRef(null);
  return (
    <>
      <Draggable nodeRef={nodeRef} handle="#terminal-title-bar">
        <div id="terminalParent" ref={nodeRef} className="w-4/6 h-3/4 absolute">
          <TerminalWindow />
        </div>
      </Draggable>
    </>
  );
}
