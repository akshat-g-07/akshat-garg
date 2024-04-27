import NotesBody from "./Notes-Body";
import NotesTitle from "./Notes-Title";

export default function NotesWindow() {
  return (
    <>
      <div
        id="notes"
        className="h-full w-full rounded-md absolute min-h-10 min-w-64 drop-shadow-lg resize overflow-auto bg-white"
      >
        <NotesTitle />
        <NotesBody />
      </div>
    </>
  );
}
