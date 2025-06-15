import { useLocation } from "react-router";

import IsPath from "@/lib/is-path";
import { cn } from "@/lib/utils";

import Tile from "@/components/common/tile";

import block from "../../assets/block.png";
import cheese from "../../assets/cheese.png";
import jerry from "../../assets/jerry.png";
import path from "../../assets/path.png";

export default function IndividualMatrix({ title, colArray, rowArray }) {
  const location = useLocation();

  const { matrixSize, startingPoint, blocks, endingPoint } =
    location.state || {};

  return (
    <>
      <p className="font-semibold mb-2 mt-8">{title}</p>
      {[...new Array(matrixSize)].map((_, indx) => (
        <div key={indx} className="flex">
          {[...new Array(matrixSize)].map((_, i) => {
            const isPath = IsPath(colArray, rowArray, `${indx}_${i}`);
            return (
              <Tile
                key={`${indx}_${i}`}
                src={
                  `${indx}_${i}` === startingPoint
                    ? jerry
                    : blocks?.includes(`${indx}_${i}`)
                      ? block
                      : `${indx}_${i}` === endingPoint
                        ? cheese
                        : isPath
                          ? path
                          : undefined
                }
                alt={
                  `${indx}_${i}` === startingPoint
                    ? "jerry"
                    : blocks?.includes(`${indx}_${i}`)
                      ? "block"
                      : `${indx}_${i}` === endingPoint
                        ? "cheese"
                        : isPath
                          ? "path"
                          : undefined
                }
                highlighted={
                  `${indx}_${i}` === startingPoint ||
                  blocks?.includes(`${indx}_${i}`) ||
                  `${indx}_${i}` === endingPoint ||
                  isPath
                }
                className={cn(
                  blocks?.includes(`${indx}_${i}`) && "[&_img]:object-cover",
                  "pointer-events-none"
                )}
              />
            );
          })}
        </div>
      ))}
    </>
  );
}
