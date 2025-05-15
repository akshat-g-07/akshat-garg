import Treks from "@/assets/Treks.json";

// MARK: create a utility to calculate state and cache it for really long time as its coming from DB only right so it wont change for long time hence so no need to calculate it again and again and so cache it on both FE and BE, BE pr isiliye qki different FE can be requesting and all wont have cached live-11 1-02
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useMemo } from "react";

export default function Filters({ filterParam, filterVal, setFilters }) {
  const filterParamOptions = ["Recommended", "Season", "State", "Difficulty"];

  const filterValueOptions = useMemo(() => {
    switch (filterParam) {
      case "Recommended":
        return ["Recommendations"];
      case "Season":
        return ["Summer", "Monsoon", "Winter"];
      case "Difficulty":
        return ["Easy", "Medium", "Hard"];
      case "State":
        return [...new Set(Treks.map((trek) => trek.state))];

      default:
        return [];
    }
  }, [filterParam]);
  return (
    <div className="flex-1 flex justify-evenly">
      <Select
        value={filterParam}
        onValueChange={(val) => {
          setFilters({
            filterParam: val,
            filterVal: "",
          });
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Parameter" />
        </SelectTrigger>
        <SelectContent>
          {filterParamOptions.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        disabled={!filterValueOptions.length}
        value={filterParam === "Recommended" ? "Recommendations" : filterVal}
        onValueChange={(val) => {
          setFilters((prev) => ({
            ...prev,
            filterVal: val,
          }));
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Value" />
        </SelectTrigger>
        <SelectContent>
          {filterValueOptions.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
