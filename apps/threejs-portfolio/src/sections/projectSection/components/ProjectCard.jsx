/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import ImagesPart from "./ImagesPart";
import NameLinkPart from "./NameLinkPart";
import SkillPart from "./SkillPart";
import DescriptionPart from "./DescriptionPart";

const ProjectCard = ({ item }) => {
  return (
    <motion.div
      key={item.name}
      className="bg-stone-700 h-auto w-64 md:w-80 overflow-x-hidden my-2 text-white text-sm md:text-lg lg:m-6"
    >
      <ImagesPart images={item.images} name={item.name} />
      <NameLinkPart name={item.name} github={item.github} live={item.live} />
      <SkillPart skills={item.skills} />
      <DescriptionPart description={item.description} />
    </motion.div>
  );
};

export default ProjectCard;
