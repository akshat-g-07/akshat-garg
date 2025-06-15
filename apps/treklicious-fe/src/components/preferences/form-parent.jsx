import { AnimatePresence, motion } from "motion/react";

import PreferenceForm from "./preference-form";

const variants = {
  enter: (direction) => {
    return {
      zIndex: 0,
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    };
  },
};

export default function FormParent({
  answers,
  question,
  direction,
  activeIndx,
  handleAnswerSelect,
}) {
  return (
    <div className="md:col-span-2 w-full min-h-100 overflow-x-hidden relative flex justify-center-safe">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={activeIndx}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", bounce: 0.3 },
            opacity: { duration: 0.5 },
          }}
          className="absolute w-full mx-4"
        >
          <PreferenceForm
            answers={answers}
            question={question}
            activeIndx={activeIndx}
            handleAnswerSelect={handleAnswerSelect}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
