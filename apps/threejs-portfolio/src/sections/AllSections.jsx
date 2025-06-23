import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import NextPrevButton from "../globalComps/NextPrevButton";
import SocialHandles from "../globalComps/SocialHandles";
import ContactSection from "./contactSection/ContactSection";
import EducationSection from "./educationSection/EducationSection";
import ExperienceSection from "./experienceSection/ExperienceSection";
import HobbySection from "./hobbySection/HobbySection";
import LandingSection from "./landingSection/LandingSection";
import ProjectSection from "./projectSection/ProjectSection";
import SkillSection from "./skillSection/SkillSection";

const AllSections = () => {
  const [sectionIndex, setSectionIndex] = useState(0);
  const sectionArray = [
    <LandingSection key="landing" />,
    <SkillSection key="skills" />,
    <ProjectSection key="projects" />,
    <ExperienceSection key="experience" />,
    <EducationSection key="education" />,
    <HobbySection key="hobby" />,
    <ContactSection key="contact" />,
  ];

  return (
    <>
      <NextPrevButton
        sectionArray={sectionArray}
        setSectionIndex={setSectionIndex}
        sectionIndex={sectionIndex}
      />
      <SocialHandles />
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={sectionArray[sectionIndex].key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
          }}
          exit={{ opacity: 0 }}
        >
          {sectionArray[sectionIndex]}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default AllSections;
