import { cn } from "@/lib/utils";
import RotatingPart from "./rotating-part";

export default function SectionTemplate({
  bgImgUrl,
  rotatingPartDescriptions,
  subTitle,
  animationDirection,
  className,
  children,
}) {
  return (
    <section
      style={{
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
    </section>
  );
}
