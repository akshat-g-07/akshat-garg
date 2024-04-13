import DateTime from "./_components/Date-Time";
import Footer from "./_components/Footer";
import Terminal from "./_components/Terminal";

export default function Home() {
  return (
    <main className="h-screen bg-red-500 overflow-hidden w-screen static">
      <header className="h-[5%] bg-blue-500 rounded-t-md w-full">
        <DateTime />
      </header>
      <div className="h-[95%] w-full bg-green-500" id="terminalParent">
        <Terminal />
      </div>
      <footer className="absolute h-12 w-5/6 bottom-2 left-1/2 -translate-x-1/2 bg-yellow-500 flex justify-center">
        <Footer />
      </footer>
    </main>
  );
}
