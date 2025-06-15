import { useEffect, useMemo } from "react";
import { APIs } from "@/apis";
import { useQuery } from "@tanstack/react-query";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Filters({
  isLoading,
  filterParam,
  filterVal,
  setFilters,
}) {
  const queryKey = "all-treks";
  const { queryOptions } = APIs[queryKey];
  const { data: Treks } = useQuery({
    queryKey: [queryKey],
    ...queryOptions,
  });

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
        return [...new Set(Treks?.map((trek) => trek.state) || [])];

      default:
        return [];
    }
  }, [filterParam, Treks]);

  useEffect(() => {
    if (filterParam === "Recommended")
      setFilters((prev) => ({
        ...prev,
        filterVal: "Recommendations",
      }));
  }, [filterParam, setFilters]);

  return (
    <div className="flex-1 flex flex-col md:flex-row justify-evenly w-full items-center-safe gap-y-4 mt-8 md:mt-0">
      <Select
        disabled={isLoading}
        value={filterParam}
        onValueChange={(val) => {
          setFilters({
            filterParam: val,
            filterVal: "",
          });
        }}
      >
        <SelectTrigger className="w-[180px] focus-visible:border-black data-[placeholder]:text-white">
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
        disabled={!filterValueOptions.length || isLoading}
        value={filterVal}
        onValueChange={(val) => {
          setFilters((prev) => ({
            ...prev,
            filterVal: val,
          }));
        }}
      >
        <SelectTrigger className="w-[180px] focus-visible:border-black data-[placeholder]:text-white">
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
