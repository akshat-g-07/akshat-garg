"use client";

import { useEffect, useState } from "react";

import Body from "./_components/Body";
import LockScreen from "./_components/Lock-Screen";

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 390) {
      alert(
        "This particular portfolio is best viewed in bigger screens (Laptop/PC/Tablet). Redirecting you to secondary portfolio."
      );
      window.location.href =
        "https://threejs-portfolio.akshat-garg.com/?ref=rec";
    }
  }, []);
  return (
    <>
      <LockScreen setUnlocked={setUnlocked} />
      {unlocked && <Body />}
    </>
  );
}
