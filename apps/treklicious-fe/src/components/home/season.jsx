import { useMemo } from "react";

import Loading from "@/components/common/loading";
import TileRow from "@/components/common/tile-row";

import imgSrc from "../../assets/season-bg.jpg";
import SectionTemplate from "./section-template";

export default function Season({ Treks, isLoading }) {
  const rotatingPartDescriptions = ["Summer", "Monsoon", "Winter"];

  const summerTreks = useMemo(
    () => Treks?.filter((trek) => trek.season === "Summer") ?? [],
    [Treks]
  );

  const monsoonTreks = useMemo(
    () => Treks?.filter((trek) => trek.season === "Monsoon") ?? [],
    [Treks]
  );

  const winterTreks = useMemo(
    () => Treks?.filter((trek) => trek.season === "Winter") ?? [],
    [Treks]
  );

  return (
    <SectionTemplate
      bgImgUrl={imgSrc}
      rotatingPartDescriptions={rotatingPartDescriptions}
      subTitle="for all seasons"
      animationDirection="up"
      speed={0.75}
      className="px-0 bg-contain bg-[#A1D2CE] bg-right"
    >
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {[summerTreks, monsoonTreks, winterTreks].map(
            (seasonTreks, index) => (
              <TileRow key={index} treks={seasonTreks} />
            )
          )}
        </>
      )}
    </SectionTemplate>
  );
}
