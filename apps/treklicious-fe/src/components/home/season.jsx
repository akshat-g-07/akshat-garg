import imgSrc from "../../assets/season-bg.jpg";
import SectionTemplate from "./section-template";
import TileRow from "@/components/common/tile-row";

import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/common/loading";
import AllTreks from "@/apis/Trek/AllTreks";
import { useMemo } from "react";
import { Keys } from "@/apis/keys";

export default function Season() {
  const rotatingPartDescriptions = ["Summer", "Monsoon", "Winter"];
  // const { meta, queryOptions } = Keys["/"];
  // const {
  //   isLoading,
  //   error,
  //   data: Treks,
  // } = useQuery({
  //   queryKey: ["/"],
  //   meta,
  //   ...queryOptions,
  // });
  // const queryKey = "with-headers";
  // const { meta, queryOptions } = Keys[queryKey];
  // const {
  //   isLoading,
  //   error,
  //   data: Treks,
  // } = useQuery({
  //   queryKey: [queryKey],
  //   meta,
  //   ...queryOptions,
  // });
  // const { queryKey, meta, queryOptions } = Keys["post-req"];
  // const {
  //   isLoading,
  //   error,
  //   data: Treks,
  // } = useQuery({
  //   queryKey,
  //   meta,
  //   ...queryOptions,
  // });
  const queryKey = "trekby-ID";
  const { meta, queryOptions } = Keys[queryKey];
  const {
    isLoading,
    error,
    data: Treks,
  } = useQuery({
    queryKey: [queryKey, "/649701d2dfe153ddd70c670a"],
    meta,
    ...queryOptions,
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

  if (error) {
    console.log("Error in State", error);
    return <></>;
  }

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
