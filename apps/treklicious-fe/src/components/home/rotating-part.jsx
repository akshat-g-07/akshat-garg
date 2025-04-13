import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function RotatingPart() {
  const descriptions = ["Adventure", "Escape", "Quest", "Getaway", "Odyssey"];

  const [showId, setShowId] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowId((prev) => (prev + 1) % descriptions.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [showId, descriptions.length]);

  const animation = {
    y: ["-100%", "0%", "0%", "100%"],
    transition: {
      duration: 2.5,
      times: [0, 0.25, 0.75, 1],
      repeat: Infinity,
    },
  };

  return (
    <div className="w-full overflow-hidden text-5xl flex justify-center">
      <motion.div animate={animation}>{descriptions[showId]}</motion.div>
    </div>
  );
}
