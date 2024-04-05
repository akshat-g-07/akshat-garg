export default function TerminalTitle() {
  return (
    <>
      <div className="h-[7.5%] w-full flex bg-lime-300 rounded-t-md">
        <div className="flex w-1/12 h-full items-center justify-evenly bg-black">
          <div className="rounded-full bg-red-500 size-3" />
          <div className="rounded-full bg-yellow-500 size-3" />
          <div className="rounded-full bg-green-500 size-3" />
        </div>
        <p className="text-center h-full w-11/12">Akshat Garg</p>
      </div>
    </>
  );
}
