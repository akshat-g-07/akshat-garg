import Image from "next/image";
import DateTime from "./Date-Time";
import Footer from "./Footer";
import Terminal from "./Terminal";
import PDFIcon from "./PDF-Icon";

export default function Body() {
  return (
    <>
      <main className="h-screen overflow-hidden w-screen static">
        <header className="h-[5%] rounded-t-md w-full flex justify-end px-4 bg-gray-500 items-center">
          <div className="size-6 flex justify-center items-center">
            <Image
              src={"/header/wifi.png"}
              width={100}
              height={100}
              alt="wifi"
            />
          </div>
          <div className="size-5 flex justify-center items-center mx-2">
            <Image
              src={"/header/switch.png"}
              width={100}
              height={100}
              alt="switch"
            />
          </div>
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
          <>
            <PDFIcon />
          </>
          <div
            id="notesParent"
            className="h-[95%] absolute w-full overflow-hidden"
          ></div>
          <div
            id="terminalParent"
            className="h-[95%] absolute w-full overflow-hidden"
          >
            <Terminal />
          </div>
        </div>
        <footer className="absolute z-20 h-12 w-5/6 bottom-2 left-1/2 -translate-x-1/2 flex justify-center">
          <Footer />
        </footer>
      </main>
    </>
  );
}
