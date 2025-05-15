import { useRef } from "react";
import src01 from "../../assets/01.png";
import src02 from "../../assets/02.png";
import src03 from "../../assets/03.png";
import src04 from "../../assets/04.png";
import src05 from "../../assets/05.png";
import src06 from "../../assets/06.png";
import src07 from "../../assets/07.png";
import { useScroll } from "motion/react";
import HeroSectionImageHolder from "./hero-section-image-holder";

export default function HeroSection() {
  const parentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start end", "end start"],
  });
  const imgSrcArray = [src01, src02, src03, src04, src05, src06, src07];
  const speedMultipliers = [0.5, 0.7, 1, 1.2, 1.5, 1.8, 2];

  return (
    <>
      <section ref={parentRef} className="relative w-full h-screen">
        {imgSrcArray.map((imgSrc, i) => {
          return (
            <HeroSectionImageHolder
              key={i}
              speed={speedMultipliers[i]}
              scrollYProgress={scrollYProgress}
              imgSrc={imgSrc}
            />
          );
        })}
        <div className="absolute size-full flex flex-col items-center font-[Alegreya_SC,serif] pt-[100px] *:w-full *:text-center px-8">
          <p className="text-[8vw] font-extrabold">TrekLicious</p>
          <p className="text-[5vw] md:text-[3vw] font-bold">
            Smart Trek Recommendations Based on
            <span className="italic"> You</span> !
          </p>
        </div>
      </section>
    </>
  );
}
