"use client";

import NotesBody from "./Notes-Body";
import NotesTitle from "./Notes-Title";
import Draggable from "react-draggable";
import { useRef } from "react";

export default function Notes() {
  const notesNodeRef = useRef(null);
  return (
    <>
      <Draggable notesNodeRef={notesNodeRef} handle="#notes-title">
        <div
          className="w-full h-full flex items-center justify-center"
          ref={notesNodeRef}
        >
          <div
            id="notes"
            className="max-h-full max-w-full rounded-md min-h-10 min-w-64 w-4/6 h-2/3 drop-shadow-lg resize overflow-auto bg-white"
          >
            <NotesTitle />
            <NotesBody />
          </div>
        </div>
      </Draggable>
    </>
  );
}
