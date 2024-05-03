/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import ImagesPart from "./ImagesPart";
import NameLinkPart from "./NameLinkPart";
import SkillPart from "./SkillPart";
import DescriptionPart from "./DescriptionPart";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      key={project.name}
      className="bg-stone-700 h-auto w-64 md:w-80 overflow-x-hidden my-2 text-white text-sm md:text-lg lg:m-6"
    >
      <ImagesPart images={project.images} name={project.name} />
      <NameLinkPart
        name={project.name}
        github={project.github}
        live={project.live}
      />
      <SkillPart skills={project.skills} />
      <DescriptionPart description={project.description} />
    </motion.div>
  );
};

export default ProjectCard;
