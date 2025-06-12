import jerry from "../../assets/jerry.png";
import block from "../../assets/block.png";
import cheese from "../../assets/cheese.png";
import Tile from "@/components/common/tile";
import { cn } from "@/lib/utils";

export default function ProblemMatrix({
  matrixSize,
  startingPoint,
  blocks,
  endingPoint,
}) {
  return (
    <div className="mt-4 mb-8">
      {[...new Array(matrixSize)].map((_, indx) => (
        <div key={indx} className="flex">
          {[...new Array(matrixSize)].map((_, i) => (
            <Tile
              key={`${indx}_${i}`}
              src={
                `${indx}_${i}` === startingPoint
                  ? jerry
                  : blocks?.includes(`${indx}_${i}`)
                    ? block
                    : `${indx}_${i}` === endingPoint && cheese
              }
              alt={
                `${indx}_${i}` === startingPoint
                  ? "jerry"
                  : blocks?.includes(`${indx}_${i}`)
                    ? "block"
                    : `${indx}_${i}` === endingPoint && "cheese"
              }
              highlighted={
                `${indx}_${i}` === startingPoint ||
                blocks?.includes(`${indx}_${i}`) ||
                `${indx}_${i}` === endingPoint
              }
              className={cn(
                blocks?.includes(`${indx}_${i}`) && "[&_img]:object-cover",
                "pointer-events-none"
              )}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
