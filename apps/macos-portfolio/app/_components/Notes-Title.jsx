"use client";

export default function NotesTitle() {
  return (
    <>
      <div className="h-[7.5%] w-full flex bg-lime-300 rounded-t-md">
        <div className="flex w-1/12 h-full items-center justify-evenly bg-black">
          <div
            className="rounded-full cursor-pointer bg-red-500 size-3"
            onClick={() => {
              document.getElementById("notes").remove();
            }}
          />
          <div
            className="rounded-full cursor-pointer bg-yellow-500 size-3"
            onClick={() => {
              const notesbody = document.getElementById("notes-body");
              if (notesbody.classList.contains("MINIMIZED")) {
                notesbody.classList.remove("MINIMIZED");
                notesbody.classList.remove("h-0");
                notesbody.classList.remove("overflow-y-hidden");
                notesbody.classList.add("h-[92.5%]");
                notesbody.classList.add("overflow-y-auto");
              } else {
                notesbody.classList.add("MINIMIZED");
                notesbody.classList.add("h-0");
                notesbody.classList.add("overflow-y-hidden");
                notesbody.classList.remove("h-[92.5%]");
                notesbody.classList.remove("overflow-y-auto");
              }
            }}
          />
          <div
            className="rounded-full cursor-pointer bg-green-500 size-3"
            onClick={() => {
              const notes = document.getElementById("notes");
              if (notes.classList.contains("MAX_SIZE")) {
                notes.classList.remove("MAX_SIZE");
                notes.classList.remove("w-full");
                notes.classList.remove("h-full");
                notes.classList.add("w-4/6");
                notes.classList.add("h-3/4");
                notes.classList.add("translate-x-1/4");
                notes.classList.add("translate-y-[10%]");
              } else {
                notes.classList.add("MAX_SIZE");
                notes.classList.add("w-full");
                notes.classList.add("h-full");
                notes.classList.remove("w-4/6");
                notes.classList.remove("h-3/4");
                notes.classList.remove("translate-x-1/4");
                notes.classList.remove("translate-y-[10%]");
              }
            }}
          />
        </div>
        <p className="text-center h-full w-11/12">Projects of Akshat Garg</p>
      </div>
    </>
  );
}
