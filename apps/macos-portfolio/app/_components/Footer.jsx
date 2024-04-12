import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div
        id="footer"
        className="h-full w-fit flex items-center *:px-2 *:h-fit *:w-fit *:cursor-pointer *:duration-200
      "
      >
        <div className="*:hover:scale-[2] *:duration-200 hover:px-6 *:origin-bottom">
          <Image
            src={"/footer/terminal.png"}
            width={42.5}
            height={42.5}
            alt="Terminal"
          />
        </div>
        <div className="*:hover:scale-[2] *:duration-200 hover:px-6 *:origin-bottom">
          <Image
            src={"/footer/chrome.png"}
            width={37.5}
            height={37.5}
            alt="Picture of the author"
          />
        </div>
        <div className="*:hover:scale-[2] *:duration-200 hover:px-6 *:origin-bottom">
          <Image src={"/footer/notes.png"} width={40} height={40} alt="Notes" />
        </div>
        <div className="*:hover:scale-[2] *:duration-200 hover:px-6 *:origin-bottom">
          <Image
            src={"/footer/linkedin.png"}
            width={40}
            height={40}
            alt="LinkedIn"
          />
        </div>
        <div className="*:hover:scale-[2] *:duration-200 hover:px-6 *:origin-bottom">
          <Image
            src={"/footer/x.png"}
            width={42.5}
            height={42.5}
            alt="X(Twitter)"
          />
        </div>
        <div className="*:hover:scale-[2] *:duration-200 hover:px-6 *:origin-bottom">
          <Image
            src={"/footer/github.png"}
            width={40}
            height={40}
            alt="Github"
          />
        </div>
        <div className="*:hover:scale-[2] *:duration-200 hover:px-6 *:origin-bottom">
          <Image
            src={"/footer/gmail.png"}
            width={47.5}
            height={47.5}
            alt="Gmail"
          />
        </div>
      </div>
    </>
  );
}
