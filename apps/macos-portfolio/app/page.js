import Image from "next/image";
import DateTime from "./_components/Date-Time";
import Footer from "./_components/Footer";
import Terminal from "./_components/Terminal";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden w-screen static">
      <header
        className="h-[5%] rounded-t-md w-full flex justify-end px-4"
        style={{
          background: "linear-gradient(180deg,#e6e6e6 0,#a3a3a3)",
        }}
      >
        <Image
          className="w-auto h-auto bg-black/20"
          src={"/header/wifi.png"}
          width={25}
          height={25}
          alt="wifi"
        />
        <Image
          className="w-auto h-auto bg-black/20 mx-2"
          src={"/header/switch.png"}
          width={25}
          height={25}
          alt="switch"
        />
        <DateTime />
      </header>
      <div
        className="h-[95%] w-full"
        style={{
          backgroundImage: 'url("/wallpaper.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div id="notesParent" className="h-[95%] absolute w-full"></div>
        <div id="terminalParent" className="h-[95%] absolute w-full">
          <Terminal />
        </div>
      </div>
      <footer className="absolute z-20 h-12 w-5/6 bottom-2 left-1/2 -translate-x-1/2 flex justify-center">
        <Footer />
      </footer>
    </main>
  );
}
