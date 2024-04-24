"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function PDFIcon() {
  const [zVal, setZVal] = useState("z-20");
  const dragElement = document
    .querySelector("body")
    .querySelector(".react-draggable-dragging");

  useEffect(() => {
    if (dragElement) {
      setZVal("-z-10");
    } else {
      setZVal("z-20");
    }
  }, [dragElement]);
  return (
    <>
      <a
        download
        id="resume-icon"
        href="./resume/Akshat_Full_Stack_Resume.pdf"
        className={`size-14 absolute mt-5 ml-5 cursor-pointer font-semibold ${zVal}`}
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
