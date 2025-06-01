import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import TileRow from "@/components/common/tile-row";

export default function TrekSection({
  sectionHead,
  sectionArray,
  filterParameter,
  filterValue,
}) {
  return (
    <section className="w-full h-fit">
      <div className="group/sectionHead flex items-baseline-last transition-all ease-in-out duration-300 cursor-default text-2xl text-shadow-md text-shadow-white dark:text-shadow-none space-x-2">
        <span>{sectionHead}</span>
        <Link
          to="/explore-all"
          state={{ filterParameter, filterValue }}
          className="space-x-2 group-hover/sectionHead:w-25 text-nowrap w-0 overflow-hidden transition-all ease-in-out duration-300 hover:underline font-semibold flex items-center-safe cursor-pointer text-base"
        >
          Explore All <ChevronRight className="size-3" />
        </Link>
      </div>

      <div className="h-1 w-full bg-gradient-to-r from-black to-black/10 dark:from-white dark:to-white/10 to-30%" />

      <TileRow treks={sectionArray} />
    </section>
  );
}
