import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function RotatingPart({ descriptions, animationDirection }) {
  const [showId, setShowId] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowId((prev) => (prev + 1) % descriptions?.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [showId, descriptions?.length]);

  const yValues =
    animationDirection === "up"
      ? ["100%", "0%", "0%", "-100%"]
      : ["-100%", "0%", "0%", "100%"];

  const animation = {
    y: yValues,
    transition: {
      duration: 2.5,
      times: [0, 0.25, 0.75, 1],
      repeat: Infinity,
    },
  };

  return (
    <>
      {descriptions?.length > 0 && (
        <div className="w-full overflow-hidden text-5xl flex justify-center">
          <motion.div animate={animation}>{descriptions[showId]}</motion.div>
        </div>
      )}
    </>
  );
}
