"use client";

import LockScreen from "./_components/Lock-Screen";
import Body from "./_components/Body";
import { useState } from "react";

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);
  return (
    <>
      <LockScreen setUnlocked={setUnlocked} />
      {unlocked && <Body />}
    </>
  );
}
