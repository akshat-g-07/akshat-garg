"use client";

import { useEffect, useState } from "react";

export default function DateTime() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <p className="text-white font-tInput">
        {currentDate.toLocaleString("en-US", options)}
      </p>
    </>
  );
}
