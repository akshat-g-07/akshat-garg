import HobbyBody from "./components/HobbyBody";
import IncomingAnimation from "../../globalComps/IncomingAnimation";
import { motion } from "framer-motion";
const HobbySection = () => {
  return (
    <div className="w-screen h-auto absolute top-44 flex flex-col select-none pl-16 pr-3 md:px-14 lg:px-28 pb-12">
      <motion.div
        className="text-left w-max font-sectionHeading text-4xl md:text-4xl lg:text-5xl text-white"
        animate={{
          ...IncomingAnimation,
          transition: { ...IncomingAnimation.transition, delay: 0.25 },
        }}
      >
        Activities {window.innerWidth < 768 && <br />} I ENJOY!
        <div className="font-sectionDescription flex items-center text-lg md:text-2xl lg:text-3xl my-4 lg:my-5">
          <div className="w-[20px] h-0.5 mr-2 bg-white" />
          Hobbies
        </div>
      </motion.div>
      <motion.div
        animate={{
          ...IncomingAnimation,
          transition: { ...IncomingAnimation.transition, delay: 0.75 },
        }}
      >
        <HobbyBody />
      </motion.div>
    </div>
  );
};

export default HobbySection;
