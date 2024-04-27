import ExperienceBody from "./components/ExperienceBody";
import IncomingAnimation from "../../globalComps/IncomingAnimation";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <div className="w-screen h-auto absolute top-16 flex flex-col select-none pl-10 pr-3 md:px-14">
      <motion.div
        className="text-left w-max font-sectionHeading text-xl md:text-4xl lg:text-5xl text-white"
        animate={{
          ...IncomingAnimation,
          transition: { ...IncomingAnimation.transition, delay: 1 },
        }}
      >
        Places where {window.innerWidth < 768 && <br />} I've made an IMPACT!
        <div className="font-sectionDescription flex items-center text-sm md:text-2xl lg:text-3xl my-1 lg:my-5">
          <div className="w-[20px] h-0.5 mr-2 bg-white" />
          Experience
        </div>
      </motion.div>
      <motion.div
        animate={{
          ...IncomingAnimation,
          transition: { ...IncomingAnimation.transition, delay: 1.5 },
        }}
      >
        <ExperienceBody />
      </motion.div>
    </div>
  );
};

export default ExperienceSection;
