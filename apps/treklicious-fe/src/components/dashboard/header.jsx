import { useState } from "react";
import { useTheme } from "@/providers/theme-provider";

import { cn } from "@/lib/utils";

import ProfileButton from "./profile-button";
import SearchBar from "./search-bar";
import Switch from "./switch";

export default function Header() {
  const { setTheme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const handleClick = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full h-fit flex justify-between items-center-safe py-2 px-6 bg-linear-[#5d9cec_0%,#2d6bbc_10%,#111_20%,#555_30%] bg-fixed transition-all duration-700 ease-in-out bg-position-[0px_-10px] dark:bg-position-[0px_-200px]"
      )}
    >
      <h1
        className={cn(
          "text-2xl md:text-5xl text-shadow-white dark:text-shadow-black text-shadow-sm font-[Alegreya_SC,serif]",
          isFocused && "hidden md:block"
        )}
      >
        TrekLicious
      </h1>

      <div className="flex items-center-safe w-fit gap-x-2 md:gap-x-6">
        <SearchBar isFocused={isFocused} setIsFocused={setIsFocused} />

        <Switch isFocused={isFocused} handleClick={handleClick} />

        <ProfileButton isFocused={isFocused} />
      </div>
    </header>
  );
}
