import { useEffect, useState } from "react";
import { motion } from "motion/react";

const HelloWords = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % helloWords.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const helloWords = [
    "नमस्ते",
    "Hello",
    "Hallo",
    "Hola",
    "Ciao",
    "Helló",
    "Bonjour",
    "Olá",
  ];

  return (
    <div className="w-24 md:w-52 text-white text-center text-2xl md:text-5xl font-helloWordsFont overflow-hidden">
      <motion.div
        className="size-full"
        animate={{
          y: ["100%", "0%", "0%", "-100%"],

          transition: {
            duration: 5,
            times: [0, 0.25, 0.75, 1],
            repeat: Infinity,
          },
        }}
      >
        {helloWords[wordIndex]}
      </motion.div>
    </div>
  );
};

export default HelloWords;
