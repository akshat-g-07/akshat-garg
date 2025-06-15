import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { cn } from "@/lib/utils";

import RotatingPart from "./rotating-part";

export default function SectionTemplate({
  bgImgUrl,
  rotatingPartDescriptions,
  subTitle,
  animationDirection,
  speed = 1,
  className,
  children,
}) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300 * speed, 300 * speed]
  );

  return (
    <motion.section
      ref={sectionRef}
      style={{
        backgroundPositionY,
        backgroundImage: `url(${bgImgUrl})`,
      }}
      className={cn(
        "w-full bg-no-repeat flex flex-col items-center px-8 py-16",
        className
      )}
    >
      <p className="text-[8vw] font-extrabold font-[Alegreya_SC,serif] text-shadow-[white_1px_1px_12.5px]">
        TrekLicious
      </p>
      <div className="font-[Poppins,sans-serif] flex flex-col items-center min-w-[400px]">
        <p className="text-xl">{subTitle}</p>
        <RotatingPart
          descriptions={rotatingPartDescriptions}
          animationDirection={animationDirection}
        />
      </div>
      {children}
    </motion.section>
  );
}
