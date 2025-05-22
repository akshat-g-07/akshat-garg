import { ChevronLeft } from "lucide-react";
import Tile from "@/components/common/tile";

export default function TileRow({ treks }) {
  return (
    <div className="w-full h-fit my-4 [mask-image:linear-gradient(to_right,transparent,black_25%,black_75%,transparent)] overflow-x-auto px-40">
      <div className="w-fit h-fit flex items-center space-x-4 overflow-x-auto flex-nowrap py-6 px-10">
        {/* MARK: use uuid to link */}
        {treks.map((trek, index) => (
          <Tile
            key={index}
            imgSrc={trek.img}
            alt={trek.name.toLowerCase()}
            title={trek.name}
            link={`/trek/${trek._id}`}
          />
        ))}
      </div>
    </div>
  );
}
