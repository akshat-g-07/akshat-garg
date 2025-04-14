import { cn } from "@/lib/utils";
import { Link } from "react-router";

export default function Tile({ imgSrc, alt, title, link, className }) {
  return (
    <Link
      to={link}
      className={cn(
        "border-2 border-black rounded-lg flex justify-center items-center transition-all duration-500 ease-in-out pointer shadow-xl hover:scale-105 group/tile-parent relative overflow-hidden aspect-video w-64",
        className
      )}
    >
      <img
        src={imgSrc}
        alt={alt}
        className="size-full object-fill transition-all duration-500 ease-in-out group-hover/tile-parent:scale-110"
      />
      <p className="absolute z-10 bottom-4 text-white font-extrabold text-lg tracking-wide shadow-black text-center transition-all duration-500 ease-in-out group-hover/tile-parent:scale-105">
        {title}
      </p>
    </Link>
  );
}
