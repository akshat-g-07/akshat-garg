"use client";

export default function TerminalBody() {
  return (
    <>
      <div className="h-[92.5%] w-full bg-blue-500">
        <p className="w-full h-fit">
          Type "help" to show a list of available commands.
        </p>
        <div className="w-full h-fit">
          <div className="w-2/12 bg-emerald-500">akshat-garg</div>
          {/* <input
            className="w-10/12 bg-white"
            type="text"
            onChange={(event) => {
              console.log("target->", event.target.value);
            }}
            onKeyDown={(event) => {
              console.log("key->", event.key);
              console.log("value->", event.target.value);
            }}
          /> */}
          <div id="editable-div" contenteditable="true">
            Click to edit
          </div>
        </div>
      </div>
    </>
  );
}
