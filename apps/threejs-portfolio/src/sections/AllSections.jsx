import { useState, useEffect } from "react";
import NextPrevButton from "../globalComps/NextPrevButton";
import SocialHandles from "../globalComps/SocialHandles";
import LandingSection from "./landingSection/LandingSection";
import SkillSection from "./skillSection/SkillSection";
import ProjectSection from "./projectSection/ProjectSection";
import ExperienceSection from "./experienceSection/ExperienceSection";
import EducationSection from "./educationSection/EducationSection";
import HobbySection from "./hobbySection/HobbySection";
import ContactSection from "./contactSection/ContactSection";
import { AnimatePresence, motion } from "framer-motion";

const AllSections = () => {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const sectionArray = [
    <LandingSection key="landing" />,
    <SkillSection key="skills" />,
    <ProjectSection key="projects" />,
    <ExperienceSection key="experience" />,
    <EducationSection key="education" />,
    <HobbySection key="hobby" />,
    <ContactSection key="contact" />,
  ];

  useEffect(() => {
    async function apiCall() {
      await fetch("https://mail-sender-exby.onrender.com");
    }
    apiCall();
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  return (
    loaded && (
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
    )
  );
};

export default AllSections;
