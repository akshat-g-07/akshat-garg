import imgSrc from "../../assets/season-bg.jpg";
import SectionTemplate from "./section-template";
import TileRow from "@/components/common/tile-row";

import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/common/loading";
import AllTreks from "@/apis/Trek/AllTreks";
import { useMemo } from "react";

export default function Season() {
  const rotatingPartDescriptions = ["Summer", "Monsoon", "Winter"];
  const {
    isLoading,
    error,
    data: Treks,
  } = useQuery({
    queryKey: ["all-treks"],
    queryFn: AllTreks,
  });

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

  console.log("Error in Season", error);
  if (error) return <></>;

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
