import SkillBody from "./components/SkillBody";
import { motion } from "framer-motion";
import IncomingAnimation from "../../globalComps/IncomingAnimation";

const SkillSection = () => {
  return (
    <div className="w-screen h-auto absolute top-16 flex flex-col select-none pl-10 pr-3 lg:pr-40 md:px-14">
      <motion.div
        animate={{
          ...IncomingAnimation,
          transition: { ...IncomingAnimation.transition, delay: 2 },
        }}
      >
        <div className="text-left w-max font-sectionHeading text-2xl md:text-5xl text-white">
          One or two {window.innerWidth < 768 && <br />} things I KNOW!
          <div className="font-sectionDescription flex items-center text-sm md:text-2xl lg:text-3xl my-1 lg:my-5">
            <div className="w-[20px] h-0.5 mr-2 bg-white" />
            Skills
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={{
          ...IncomingAnimation,
          transition: { ...IncomingAnimation.transition, delay: 2.5 },
        }}
      >
        <SkillBody />
      </motion.div>
    </div>
  );
};

export default SkillSection;
