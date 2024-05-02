import Image from "next/image";

export default function PDFIcon() {
  return (
    <>
      <a
        download
        href="./resume/Akshat_Full_Stack_Resume.pdf"
        className="size-14 absolute mt-5 ml-5 cursor-pointer font-semibold z-0 top-10 left-0 font-tInput"
      >
        <Image
          src={"/pdf-icon.png"}
          width={100}
          height={100}
          alt="Resume-Icon"
        />
        Resume
      </a>
    </>
  );
}
