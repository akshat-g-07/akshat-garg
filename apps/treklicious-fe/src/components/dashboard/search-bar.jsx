import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { APIs } from "@/apis";
import { useQuery } from "@tanstack/react-query";
import Loading from "../common/loading";
import { useNavigate } from "react-router";

export default function SearchBar({ isFocused, setIsFocused }) {
  const navigate = useNavigate();
  const queryKey = "all-names";
  const searchRef = useRef(null);
  const { queryOptions } = APIs[queryKey];
  const [searchTerm, setSearchTerm] = useState("");
  const {
    isLoading,
    error,
    data: Treks,
  } = useQuery({
    queryKey: [queryKey],
    ...queryOptions,
  });

  const [filteredSuggestions, setFilteredSuggestions] = useState(Treks || []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsFocused]);

  useEffect(() => {
    const inputEl = searchRef.current.querySelector("input");
    if (isFocused && inputEl) {
      inputEl.focus();
    }
  }, [isFocused]);

  useEffect(() => {
    if (searchTerm) {
      const filtered =
        Treks?.filter((suggestion) =>
          suggestion.name.toLowerCase().includes(searchTerm.toLowerCase())
        ) || [];
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions(Treks || []);
    }
  }, [searchTerm, Treks]);

  if (error) {
    console.log("Error in SearchBar", error);
    return <></>;
  }

  return (
    <div ref={searchRef}>
      <div
        className={cn(
          "overflow-hidden flex h-10 items-center-safe transition-all duration-300 md:duration-700 ease-out",
          isFocused ? "w-60 md:w-70 space-x-1 border-white border-b" : "w-5"
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
      {isFocused && (filteredSuggestions.length > 0 || isLoading) && (
        <div className="absolute bottom-0 translate-y-[97.5%] z-50 w-[90%] max-w-60 md:max-w-70 rounded-b-md bg-white shadow-lg max-h-[300px] overflow-y-auto">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {filteredSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-300"
                  onClick={() => {
                    navigate(`/trek/${suggestion._id}`);
                  }}
                >
                  <span>{suggestion.name}</span>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}
