import { cn } from "@/lib/utils";

export default function Tile({
  src,
  alt,
  className,
  highlighted = false,
  ...props
}) {
  return (
    <div
      className={cn(
        "size-[25px] md:size-[50px] border border-black m-px md:m-[2.5px] bg-[radial-gradient(transparent_75%,_#000)] hover:scale-105 outline-0 hover:outline-[2.5px] outline-blue-500 cursor-pointer ease-in-out transition-all duration-100 flex justify-center items-center group/tile",
        className
      )}
      {...props}
    >
      <img
        src={src}
        alt={alt}
        className={cn(
          "object-fit opacity-0 group-hover/tile:opacity-75",
          highlighted && "opacity-100 group-hover/tile:opacity-100"
        )}
      />
    </div>
  );
}
