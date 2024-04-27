import { motion } from "framer-motion";
import Skills from "./Skills";

const SkillBody = () => {
  return (
    <div className="flex flex-row flex-wrap w-4/5 lg:w-full justify-between md:flex-row-reverse md:pt-4 lg:flex-row lg:pt-0 lg:pl-96">
      {Skills.map((item, index) => {
        return (
          <motion.div
            key={item.name}
            className="h-20 w-20 text-white md:h-32 md:w-32 lg:h-36 lg:w-36 lg:m-px lg:p-0 lg:grayscale hover:grayscale-0 lg:text-slate-500 hover:text-white"
            onHoverStart={() => {
              document
                .querySelectorAll(".skillChild01")
                // eslint-disable-next-line no-unexpected-multiline
                [index].classList.add("bg-stone-400");
              document
                .querySelectorAll(".skillChild02")
                // eslint-disable-next-line no-unexpected-multiline
                [index].classList.add("bg-[rgb(80,76,74)]");
            }}
            onHoverEnd={() => {
              document
                .querySelectorAll(".skillChild01")
                // eslint-disable-next-line no-unexpected-multiline
                [index].classList.remove("bg-stone-400");
              document
                .querySelectorAll(".skillChild02")
                // eslint-disable-next-line no-unexpected-multiline
                [index].classList.remove("bg-[rgb(80,76,74)]");
            }}
          >
            <div
              style={{ backgroundImage: `url('./skills/${item.icon}')` }}
              className="h-3/4 bg-no-repeat bg-contain bg-center bg-stone-600 skillChild01"
            />
            <div className="text-center text-sm md:text-base lg:text-lg font-firstDescription bg-[rgb(53,50,48)] skillChild02">
              {item.name}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SkillBody;
