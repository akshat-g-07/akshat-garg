"use client";

import { useRef } from "react";
import Draggable from "react-draggable";

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
