"use client";

import { useEffect, useState } from "react";

export default function ResumePage() {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const downloadResume = async () => {
      try {
        const resumeLink = document.createElement("a");
        resumeLink.href = "/resume/Akshat_Garg_Resume.pdf";
        resumeLink.download = "Akshat_Garg_Resume";
        resumeLink.click();
      } catch (error) {
        console.error("Error downloading resume:", error);
      }
    };

    downloadResume();
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      window.location.href = "/";
      return;
    }
    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">
          Resume Downloaded!,
          <br />
          Redirecting to{" "}
          <a href="/" className="text-blue-500">
            Portfolio
          </a>{" "}
          in {countdown}...
        </h1>
      </div>
    </div>
  );
}
