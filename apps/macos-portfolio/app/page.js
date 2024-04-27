"use client";

import LockScreen from "./_components/Lock-Screen";
import Body from "./_components/Body";
import { useEffect, useState } from "react";

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 390) {
      alert(
        "This particular portfolio is best viewed in bigger screens (Laptop/PC/Tablet). Redirecting you to secondary portfolio."
      );
      window.location.href = "https://threejs-portfolio.akshat-garg.com/";
    }
  }, []);
  return (
    <>
      <LockScreen setUnlocked={setUnlocked} />
      {unlocked && <Body />}
    </>
  );
}
