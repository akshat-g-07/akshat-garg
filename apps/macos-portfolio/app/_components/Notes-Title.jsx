"use client";

export default function NotesTitle() {
  return (
    <>
      <div className="h-[7.5%] w-full flex bg-slate-300 rounded-t-md items-center border-b-2 border-black">
        <div className="flex w-1/12 h-full items-center justify-evenly">
          <div
            className="rounded-full cursor-pointer bg-red-500 size-4"
            onClick={() => {
              document.getElementById("notes").remove();
            }}
          />
          <div
            className="rounded-full cursor-pointer bg-yellow-500 size-4"
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
            className="rounded-full cursor-pointer bg-green-500 size-4"
            onClick={() => {
              const notes = document.getElementById("notes");
              if (notes.classList.contains("MAX_SIZE")) {
                notes.classList.remove("MAX_SIZE");
                notes.classList.remove("w-full");
                notes.classList.remove("h-full");
                notes.classList.add("w-4/6");
                notes.classList.add("h-2/3");
                notes.classList.add("translate-x-1/3");
                notes.classList.add("translate-y-[20%]");
              } else {
                notes.classList.add("MAX_SIZE");
                notes.classList.add("w-full");
                notes.classList.add("h-full");
                notes.classList.remove("w-4/6");
                notes.classList.remove("h-2/3");
                notes.classList.remove("translate-x-1/3");
                notes.classList.remove("translate-y-[20%]");
              }
            }}
          />
        </div>
        <h1 className="cursor-default text-center h-fit w-11/12 font-bold text-xl">
          Projects of Akshat Garg
        </h1>
      </div>
    </>
  );
}
