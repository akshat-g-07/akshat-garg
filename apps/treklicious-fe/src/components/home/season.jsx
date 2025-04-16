import imgSrc from "../../assets/season-bg.jpg";
import SectionTemplate from "./section-template";
import Treks from "@/assets/Treks.json";
import TileRow from "./tile-row";

export default function Season() {
  const rotatingPartDescriptions = ["Summer", "Monsoon", "Winter"];
  // MARK: fetch treks from backend, summer array, monsoon array, winter array
  const summerTreks = Treks.filter((trek) => trek.season === "Summer");
  const monsoonTreks = Treks.filter((trek) => trek.season === "Monsoon");
  const winterTreks = Treks.filter((trek) => trek.season === "Winter");
  return (
    <SectionTemplate
      bgImgUrl={imgSrc}
      rotatingPartDescriptions={rotatingPartDescriptions}
      subTitle="for all seasons"
      animationDirection="up"
      speed={0.75}
      className="px-0 bg-contain bg-[#A1D2CE] bg-right"
    >
      {[summerTreks, monsoonTreks, winterTreks].map((seasonTreks, index) => (
        <TileRow key={index} treks={seasonTreks} />
      ))}
    </SectionTemplate>
  );
}
