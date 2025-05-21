import { useEffect, useState, useMemo } from "react";
import SectionTemplate from "./section-template";
import { cn } from "@/lib/utils";
import Tile from "@/components/common/tile";
import { useQuery } from "@tanstack/react-query";
import AllTreks from "@/apis/Trek/AllTreks";
import Loading from "@/components/common/loading";

export default function State() {
  const imgSrc =
    "https://wallpapers.com/images/hd/hiking-on-foggy-mountain-g7bz0k4c45e2zmgt.jpg";

  const {
    isLoading,
    error,
    data: Treks,
  } = useQuery({
    queryKey: ["all-treks"],
    queryFn: AllTreks,
  });

  const states = useMemo(
    () => [...new Set(Treks?.map((trek) => trek.state))],
    [Treks]
  );

  const [index, setIndex] = useState(0);

  const [treks, setTreks] = useState(
    Treks?.filter((trek) => trek.state === states[index]).slice(0, 10)
  );

  useEffect(() => {
    setTreks(
      Treks?.filter((trek) => trek.state === states[index]).slice(0, 10)
    );
  }, [index, states, Treks]);

  if (error) {
    console.log("Error in State", error);
    return <></>;
  }

  return (
    <SectionTemplate
      bgImgUrl={imgSrc}
      subTitle="to explore state treasures"
      className="bg-cover bg-top"
      speed={isLoading ? 0 : 1.5}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="w-full flex flex-wrap items-center justify-center gap-4 mt-6">
            {states?.map((state, indx) => (
              <div
                key={indx}
                className={cn(
                  "rounded px-4 py-2 border text-white border-white/75 cursor-pointer",
                  index === indx &&
                    "font-medium border-amber-500 text-amber-500",
                  "hover:border-amber-500 hover:text-amber-500"
                )}
                onClick={() => {
                  setIndex(indx);
                }}
              >
                {state}
              </div>
            ))}
          </div>
          <div className="w-full gap-4 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 auto-rows-[minmax(150px,150px)] justify-items-center-safe min-h-[700px]">
            {treks?.map((trek, indx) => (
              <Tile
                key={indx}
                imgSrc={trek.img}
                alt={trek.name.toLowerCase()}
                title={trek.name}
                link={`trek/${trek._id}`}
              />
            ))}
          </div>
        </>
      )}
    </SectionTemplate>
  );
}
