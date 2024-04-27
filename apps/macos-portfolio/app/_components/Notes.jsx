"use client";

import Draggable from "react-draggable";
import { useRef } from "react";

export default function Notes() {
  const notesNodeRef = useRef(null);
  return (
    <>
      <Draggable notesNodeRef={notesNodeRef} handle="#notes-title-bar">
        <div
          id="notesParent"
          ref={notesNodeRef}
          className="w-[60%] h-[90%] absolute"
        ></div>
      </Draggable>
    </>
  );
}
