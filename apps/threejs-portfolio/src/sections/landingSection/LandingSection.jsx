import { motion } from "framer-motion";

import IncomingAnimation from "../../globalComps/IncomingAnimation";
import HelloWords from "./components/HelloWords";
import NameDesc from "./components/NameDesc";
import ResumeButton from "./components/ResumeButton";

const LandingSection = () => {
  return (
    <>
      <div className="w-screen h-auto absolute top-16 flex flex-col items-center select-none">
        <motion.div
          animate={{
            ...IncomingAnimation,
            transition: { ...IncomingAnimation.transition, delay: 1 },
          }}
        >
          <HelloWords />
        </motion.div>
        <motion.div
          animate={{
            ...IncomingAnimation,
            transition: { ...IncomingAnimation.transition, delay: 1.5 },
          }}
        >
          <NameDesc />
        </motion.div>
        <motion.div
          animate={{
            ...IncomingAnimation,
            transition: { ...IncomingAnimation.transition, delay: 1.75 },
          }}
          className="w-full"
        >
          <div className="w-full py-16 md:mt-60 flex flex-col md:flex-row justify-center md:justify-evenly lg:justify-around items-center">
            <ResumeButton />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default LandingSection;
