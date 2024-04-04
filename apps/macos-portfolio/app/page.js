import { DateTime } from "./_components/Date-Time";

export default function Home() {
  return (
    <main className="h-screen bg-red-500 w-screen static">
      <header className="h-[5%] bg-blue-500 rounded-t-md w-full">
        <DateTime />
      </header>
      <div className="h-[95%] w-full bg-green-500"></div>
      <footer className="absolute h-12 w-5/6 bottom-0 left-1/2 -translate-x-1/2 bg-yellow-500"></footer>
    </main>
  );
}
