import React from "react";

import { cn } from "@/lib/utils";

import { Preferences } from "./preferences";

export default function Stepper({ activeIndx }) {
  return (
    <>
      <div className="md:col-span-2 flex w-full justify-center-safe items-center-safe h-fit gap-x-2 md:gap-x-4 lg:gap-x-10">
        {Preferences.map((preference, index) => (
          <React.Fragment key={index}>
            <SVGIcon
              index={index}
              activeIndx={activeIndx}
              svg={preference.svg}
            />
            <div
              className={cn(
                "h-px flex-auto last:hidden",
                activeIndx === 0
                  ? "bg-gray-400"
                  : activeIndx === 1
                    ? index === 0
                      ? "bg-white"
                      : "bg-gray-400"
                    : activeIndx === 2
                      ? "bg-white"
                      : "bg-gray-400"
              )}
            />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

function SVGIcon({ index, activeIndx, svg }) {
  return (
    <div
      className={cn(
        "size-10 p-2 rounded-full",
        index === activeIndx
          ? "bg-gradient-to-r from-[rgb(106,102,225)] via-[rgb(124,131,229)] to-[rgb(150,164,234)] shadow-[0_4px_10px_0_rgba(0,0,0,0.25)]"
          : "bg-[#ccc]"
      )}
    >
      {svg}
    </div>
  );
}
