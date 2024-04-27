/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const NextPrevButton = ({ sectionArray, setSectionIndex, sectionIndex }) => {
  return (
    <>
      <motion.div
        className="fixed flex flex-col justify-between items-center h-full right-1 md:right-10 lg:right-16 z-20 text-stone-100 select-none text-lg py-8"
        animate={{ opacity: [0, 1], y: [100, 0] }}
        transition={{ type: "spring", delay: 2.5 }}
      >
        <motion.div
          className={
            sectionArray[sectionIndex].key === "landing"
              ? "flex items-center cursor-not-allowed scale-100 text-stone-500"
              : "flex items-center cursor-pointer scale-100 hover:font-semibold"
          }
          whileHover={
            sectionArray[sectionIndex].key !== "landing" && {
              scale: 1.15,
              transition: { type: "spring" },
            }
          }
          whileTap={
            sectionArray[sectionIndex].key !== "landing" && { scale: 0.8 }
          }
          onClick={() => {
            if (sectionIndex === 0) return;
            let indexVal = sectionIndex - 1;
            setSectionIndex(indexVal);
            window.playAnimation(-1, sectionArray[indexVal].key);
          }}
        >
          <motion.div
            animate={{ x: [-10, 0, -10], y: [-1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowLeftIcon boxSize={12} />
          </motion.div>
          &nbsp;Previous
        </motion.div>
        <motion.div
          id="nextAnimButton"
          className={
            sectionArray[sectionIndex].key === "contact"
              ? "flex items-center cursor-not-allowed scale-100 text-stone-500"
              : "flex items-center cursor-pointer scale-100 hover:font-semibold"
          }
          whileHover={
            sectionArray[sectionIndex].key !== "contact" && {
              scale: 1.15,
              transition: { type: "spring" },
            }
          }
          whileTap={
            sectionArray[sectionIndex].key !== "contact" && { scale: 0.8 }
          }
          onClick={() => {
            if (sectionIndex === 6) return;
            let indexVal = sectionIndex + 1;
            setSectionIndex(indexVal);
            window.playAnimation(1, sectionArray[indexVal].key);
          }}
        >
          Next&nbsp;
          <motion.div
            animate={{ x: [10, 0, 10], y: [-1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowRightIcon boxSize={12} />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default NextPrevButton;
