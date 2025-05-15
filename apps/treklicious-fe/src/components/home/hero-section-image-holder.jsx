import { motion, useTransform } from "motion/react";

export default function HeroSectionImageHolder({
  scrollYProgress,
  imgSrc,
  speed,
}) {
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300 * speed, 300 * speed]
  );

  return (
    <motion.div
      className="absolute w-full h-full bg-cover bg-[75%_50%] bg-no-repeat"
      style={{
        backgroundPositionY,
        backgroundImage: `url(${imgSrc})`,
      }}
      transition={{
        ease: "linear",
      }}
    />
  );
}
