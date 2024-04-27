import { useState } from "react";
import { motion } from "framer-motion";

const HelloWords = () => {
  const [wordIndex, setWordIndex] = useState(0);

  setTimeout(() => {
    let tempIndex = wordIndex;
    tempIndex = (tempIndex + 1) % helloWords.length;
    setWordIndex(tempIndex);
  }, 5000);

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
        className="w-full h-full"
        animate={{
          x: ["0%"],
          y: ["100%", "0%", "0%", "-100%"],
          scale: [1],
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
