import NotesBody from "./Notes-Body";
import NotesTitle from "./Notes-Title";

export default function Notes() {
  return (
    <>
      <div
        id="notes"
        className="translate-x-1/3 translate-y-[20%] max-h-full max-w-full bg-orange-500 rounded-md min-h-10 min-w-64 w-4/6 h-2/3 drop-shadow-lg"
      >
        <NotesTitle />
        <NotesBody />
      </div>
    </>
  );
}
