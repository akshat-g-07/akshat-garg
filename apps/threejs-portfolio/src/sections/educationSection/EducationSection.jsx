import { Avatar } from "@mui/material";
import IncomingAnimation from "../../globalComps/IncomingAnimation";
import { motion } from "framer-motion";

const EducationSection = () => {
  return (
    <div className="w-screen lg:w-max h-auto absolute top-80 lg:top-24 lg:right-48 lg:px-0 flex flex-col select-none pl-10 pr-3 md:px-14">
      <motion.div
        className="text-left w-max font-sectionHeading text-xl md:text-4xl lg:text-5xl text-white"
        animate={{
          ...IncomingAnimation,
          transition: { ...IncomingAnimation.transition, delay: 0.5 },
        }}
      >
        Institution that {window.innerWidth < 768 && <br />} shaped ME.
        <div className="font-sectionDescription flex items-center text-sm md:text-2xl lg:text-3xl my-1 lg:my-5">
          <div className="w-[20px] h-0.5 mr-2 bg-white" />
          Education
        </div>
      </motion.div>
      <motion.div
        className="text-white font-firstDescription font-bold text-xl md:text-3xl pt-4 flex items-center"
        animate={{
          ...IncomingAnimation,
          transition: { ...IncomingAnimation.transition, delay: 1 },
        }}
      >
        <Avatar
          alt="N I T"
          src="/images/nitp.png"
          sx={{ height: 56, width: 56 }}
        />
        <div className="ml-4">
          National Institute of Technology{" "}
          <span className="text-stone-400 text-sm md:text-lg font-bold font-secondDescription block md:inline">
            Patna
          </span>
          <span className="text-stone-500 text-xs md:text-base font-secondDescription block md:my-2">
            2017-2021
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default EducationSection;
