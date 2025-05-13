import Treks from "@/assets/Treks.json";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function SearchBar() {
  const searchRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState(Treks);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const inputEl = searchRef.current.querySelector("input");
    if (isFocused && inputEl) {
      console.log("inputEl", inputEl);

      inputEl.focus();
    }
  }, [isFocused]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = Treks.filter((suggestion) =>
        suggestion.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions(Treks);
    }
  }, [searchTerm]);

  return (
    <>
      <div
        ref={searchRef}
        className={cn(
          "overflow-hidden flex h-10 items-center-safe transition-all duration-700 ease-out",
          isFocused ? "w-70 space-x-1 border-white border-b" : "w-5"
        )}
      >
        <Search
          className="size-5 cursor-pointer"
          onClick={() => {
            setIsFocused(true);
          }}
        />
        <input
          type="text"
          className={cn(
            "h-10 w-full text-base focus:outline-none",
            isFocused ? "block" : "hidden"
          )}
          placeholder="Search Trek Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
        />
      </div>
      {isFocused && filteredSuggestions.length > 0 && (
        <div className="absolute bottom-0 translate-y-[97.5%] z-50 w-[90%] max-w-70 rounded-b-md bg-white shadow-lg max-h-[300px] overflow-y-auto">
          {filteredSuggestions.map((suggestion, index) => (
            <div
              key={index}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-300"
              onClick={() => {
                setIsFocused(false);
              }}
            >
              <span>{suggestion.name}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
