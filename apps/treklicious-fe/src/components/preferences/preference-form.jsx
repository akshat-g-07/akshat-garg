import Treks from "@/assets/Treks.json";
import { useEffect, useMemo, useRef, useState } from "react";
import { Preferences } from "./preferences";
import { BadgeCheck, ChevronDown, ChevronUp } from "lucide-react";

export default function PreferenceForm({
  answers,
  question,
  activeIndx,
  handleAnswerSelect,
}) {
  const FilteredTrekNames = useMemo(
    () => [
      ...new Set(
        Treks.filter(
          (trek) =>
            trek.state !== "Uttarakhand" &&
            trek.state !== "Himachal Pradesh" &&
            trek.state !== "Maharashtra"
        ).map((trek) => trek.state)
      ),
    ],
    []
  );

  return (
    <div className="text-white font-[Tajawal,sans-serif] rounded overflow-hidden">
      <p className="bg-black w-full border-b border-white/75 text-xl p-2">
        {Preferences[activeIndx].question}
      </p>
      {Preferences[activeIndx].options.map((option, index) => (
        <div
          key={index}
          className="odd:bg-[#303030] even:bg-[#1E1E1E] odd:hover:bg-[#303030]/90 even:hover:bg-[#1E1E1E]/90 cursor-pointer flex items-center-safe justify-between"
        >
          {option === "Other:" ? (
            <OtherOption
              filteredTrekNames={FilteredTrekNames}
              handleAnswerSelect={handleAnswerSelect}
            />
          ) : (
            <p
              className="p-2 pr-0 size-full"
              onClick={() => {
                handleAnswerSelect(option);
              }}
            >
              {option}
            </p>
          )}
          {answers[question].includes(option) && (
            <BadgeCheck className="size-4 text-emerald-500 mr-2" />
          )}
        </div>
      ))}
    </div>
  );
}

const OtherOption = ({ filteredTrekNames, handleAnswerSelect }) => {
  const searchRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] =
    useState(filteredTrekNames);

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
    if (searchTerm) {
      const filtered = filteredTrekNames.filter((suggestion) =>
        suggestion.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions(filteredTrekNames);
    }
  }, [searchTerm, filteredTrekNames]);

  return (
    <div
      className="w-full flex items-center-safe p-2 pr-0"
      onClick={() => {
        if (searchTerm) handleAnswerSelect(`Other: ${searchTerm}`);
      }}
    >
      <p className="w-fit md:w-[10%]">Other:</p>
      <div ref={searchRef} className="w-[90%] max-w-60">
        <div className="flex items-center-safe">
          <input
            type="text"
            className="h-10 w-full text-base focus:outline-none focus:border-white border-b border-white/90"
            placeholder="Search State"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
          />
          {isFocused ? (
            <ChevronUp className="size-4" />
          ) : (
            <ChevronDown className="size-4" />
          )}
        </div>
        {isFocused && filteredSuggestions.length > 0 && (
          <div className="absolute z-50 w-[90%] max-w-60 rounded-b-md bg-white shadow-lg max-h-[300px] overflow-y-auto">
            {filteredSuggestions.map((suggestion, index) => (
              <div
                key={index}
                className="flex items-center px-4 py-2 odd:bg-[#303030] even:bg-[#1E1E1E] odd:hover:bg-[#303030]/90 even:hover:bg-[#1E1E1E]/90 cursor-pointer"
                onClick={() => {
                  handleAnswerSelect(`Other: ${suggestion}`);
                  setSearchTerm(suggestion);
                  setIsFocused(false);
                }}
              >
                <span>{suggestion}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
