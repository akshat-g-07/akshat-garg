import imgSrc from "../../assets/season-bg.jpg";
import SectionTemplate from "./section-template";

export default function Season() {
  const rotatingPartDescriptions = ["Summer", "Monsoon", "Winter"];
  return (
    <SectionTemplate
      bgImgUrl={imgSrc}
      rotatingPartDescriptions={rotatingPartDescriptions}
      subTitle="for all seasons"
      animationDirection="up"
      className="bg-contain bg-[#A1D2CE] bg-right h-[752px]"
    ></SectionTemplate>
  );
}
