import { preferencesSVGs } from "@/assets/preferencesSVGs";
import { cn } from "@/lib/utils";
import React from "react";

export default function Stepper({ activeIndx }) {
  return (
    <>
      <div className="md:col-span-2 flex w-full justify-center-safe items-center-safe h-fit gap-x-2 md:gap-x-4 lg:gap-x-10">
        {preferencesSVGs.map((svg, index) => (
          <React.Fragment key={index}>
            <SVGIcon index={index} activeIndx={activeIndx} />
            <div className="bg-white h-px flex-auto last:hidden" />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

function SVGIcon({ index, activeIndx }) {
  return (
    <div
      className={cn(
        "size-10 p-2 rounded-full",
        index === activeIndx
          ? "bg-gradient-to-r from-[rgb(106,102,225)] via-[rgb(124,131,229)] to-[rgb(150,164,234)] shadow-[0_4px_10px_0_rgba(0,0,0,0.25)]"
          : "bg-[#ccc]"
      )}
    >
      {preferencesSVGs[index]}
    </div>
  );
}
