import Treks from "@/assets/Treks.json";
import BackButton from "@/components/common/back-button";
import { useLocation } from "react-router";
import { useState } from "react";
import Filters from "@/components/explore-all/filters";
import ShowTreks from "@/components/common/show-treks";

export default function ExploreAll() {
  const location = useLocation();
  const { filterParameter, filterValue } = location.state || {};
  const [{ filterParam, filterVal }, setFilters] = useState({
    filterParam: filterParameter || "",
    filterVal: filterValue || "",
  });

  return (
    <section>
      <header className="w-full h-fit bg-[#6495ed] flex py-6 px-8">
        <BackButton />

        <Filters
          filterParam={filterParam}
          filterVal={filterVal}
          setFilters={setFilters}
        />
      </header>

      <ShowTreks treks={Treks} />
    </section>
  );
}
