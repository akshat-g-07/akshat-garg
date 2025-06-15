import Image from "next/image";

import DateTime from "./Date-Time";
import Footer from "./Footer";
import Notes from "./Notes";
import PDFIcon from "./PDF-Icon";
import Terminal from "./Terminal";

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
          className="h-[95%] w-full overflow-hidden flex items-center justify-center"
          style={{
            backgroundImage: 'url("/wallpaper.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <>
            <PDFIcon />
          </>
          <Notes />
          <>
            <Terminal />
          </>
        </div>
        <footer className="absolute z-20 h-12 w-5/6 bottom-2 left-1/2 -translate-x-1/2 flex justify-center">
          <Footer />
        </footer>
      </main>
    </>
  );
}
