"use client";

import Image from "next/image";
import { useState } from "react";

export default function LockScreen({ setUnlocked }) {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!userName.length) {
      setError("Please Enter Your Name.");
      return;
    }

    var regex = /^[a-zA-Z]+$/;
    if (!regex.test(userName)) {
      setError("The name can only consist of letters (a-z and/or A-Z)");
      return;
    }

    (async function apiCall() {
      await fetch(`https://mail-sender-exby.onrender.com?user=${userName}`);
    })();

    const lockScreen = document.getElementById("lock-screen");
    lockScreen.style.transform = "translate(0px,-100%)";
    setUnlocked(true);
    setTimeout(() => {
      lockScreen.remove();
    }, 2000);
  };

  const handleChange = (event) => {
    setUserName(event.target.value);
  };
  return (
    <main
      id="lock-screen"
      className="absolute ease-in-out z-50 h-screen w-screen duration-[2000ms] flex flex-col items-center justify-center"
      style={{
        background: 'url("./lock-screen.jpg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Image
        priority
        src={"/user-avatar.png"}
        width={"125"}
        height={"125"}
        alt="User"
        className="mb-10 w-auto h-auto"
      />
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          autoFocus
          type="text"
          onChange={handleChange}
          placeholder="Enter your name"
          className="flex h-9 w-60 mx-auto rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        />
        {error && (
          <span className="text-[#d32f2f] bg-[#ffffff78] my-2 rounded-sm p-1 mx-auto font-semibold text-sm">
            {error}
          </span>
        )}
        <button
          type="submit"
          className="bg-zinc-300 text-black h-9 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-fit mx-auto my-3 shadow hover:bg-zinc-300/90"
        >
          Sign In
        </button>
      </form>
    </main>
  );
}
