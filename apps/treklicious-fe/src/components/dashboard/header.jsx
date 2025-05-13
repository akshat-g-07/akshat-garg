import { cn } from "@/lib/utils";
import { useState } from "react";
import Switch from "./switch";

export default function Header() {
  // true mean light mode false means dark mode
  const [displayMode, setDisplayMode] = useState(true);

  const handleClick = () => {
    setDisplayMode((prev) => !prev);
  };

  return (
    <header
      className={cn(
        "sticky top-0 w-full h-fit flex justify-between items-center-safe py-2 px-6 bg-linear-[#5d9cec_0%,#2d6bbc_10%,#111_20%,#555_30%] bg-fixed transition-all duration-700 ease-in-out",
        displayMode ? "bg-position-[0px_-10px]" : "bg-position-[0px_-200px]"
      )}
    >
      <h1 className="text-2xl md:text-5xl text-shadow-white font-[Alegreya_SC,serif]">
        TrekLicious
      </h1>

      <Switch handleClick={handleClick} displayMode={displayMode} />
    </header>
  );
}
