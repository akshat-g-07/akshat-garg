"use client";

import LockScreen from "./_components/Lock-Screen";
import Body from "./_components/Body";
import { useState } from "react";

export default function Home() {
  const [unlocked, setUnocked] = useState(false);
  return (
    <>
      <LockScreen setUnocked={setUnocked} />
      {unlocked && <Body />}
    </>
  );
}
