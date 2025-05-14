import { useEffect, useState, useMemo } from "react";
import SectionTemplate from "./section-template";
import Treks from "@/assets/Treks.json";
import { cn } from "@/lib/utils";
import Tile from "@/components/common/tile";

export default function State() {
  const imgSrc =
    "https://wallpapers.com/images/hd/hiking-on-foggy-mountain-g7bz0k4c45e2zmgt.jpg";

  // MARK: db
  // or maybe fetch all the treks grouped by states
  // fetch first 10 only
  const states = useMemo(
    () => [
      "Uttarakhand",
      "Himachal Pradesh",
      "Jammu and Kashmir",
      "Karnataka",
      "Maharashtra",
    ],
    []
  );

  const [index, setIndex] = useState(0);

  const [treks, setTreks] = useState(
    Treks.filter((trek) => trek.state === states[index]).slice(0, 10)
  );

  useEffect(() => {
    setTreks(Treks.filter((trek) => trek.state === states[index]).slice(0, 10));
  }, [index, states]);

  return (
    <SectionTemplate
      bgImgUrl={imgSrc}
      subTitle="to explore state treasures"
      className="bg-cover bg-top"
      speed={1.5}
    >
      <div className="w-full flex flex-wrap items-center justify-center gap-4 mt-6">
        {states.map((state, indx) => (
          <div
            key={indx}
            className={cn(
              "rounded px-4 py-2 border text-white border-white/75 cursor-pointer",
              index === indx && "font-medium border-amber-500 text-amber-500",
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
        {treks.map((trek, indx) => (
          <Tile
            key={indx}
            imgSrc={trek.img}
            alt={trek.name.toLowerCase()}
            title={trek.name}
            link={trek.name.toLowerCase()}
          />
        ))}
      </div>
    </SectionTemplate>
  );
}
