"use client";

import Image from "next/image";
import { useState } from "react";

export default function LockScreen() {
  const [userName, setUserName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("user input", userName);
    const lockScreen = document.getElementById("lock-screen");
    lockScreen.style.transform = "translate(0px,-100%)";
    setTimeout(() => {
      lockScreen.remove();
    }, 1000);
  };

  const handleChange = (event) => {
    setUserName(event.target.value);
  };
  return (
    <main
      id="lock-screen"
      className="absolute ease-out z-50 h-screen w-screen duration-1000 flex flex-col items-center justify-center"
      style={{
        background: 'url("./lock-screen.jpg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Image
        src={"/user-avatar.png"}
        width={"150"}
        height={"150"}
        alt="User"
        className="mb-10"
      />
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          autoFocus
          type="text"
          onChange={handleChange}
          placeholder="Enter your name"
          className="flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        />
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
