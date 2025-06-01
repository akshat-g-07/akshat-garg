import Protected from "@/components/common/protected";
import BackButton from "@/components/common/back-button";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import Filters from "@/components/explore-all/filters";
import ShowTreks from "@/components/common/show-treks";
import { APIs } from "@/apis";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/common/loading";
import Error from "@/components/common/error";

export default function ExploreAll() {
  const location = useLocation();
  const { filterParameter, filterValue } = location.state || {};
  const [{ filterParam, filterVal }, setFilters] = useState({
    filterParam: filterParameter || "",
    filterVal: filterValue || "",
  });

  const [queryKey, setQueryKey] = useState(() => {
    if (filterParam === "Recommended" && filterVal === "Recommendations")
      return "recommended-treks";
    else return "category-treks";
  });
  const [queryKeyID, setQueryKeyID] = useState(() => {
    if (filterParam === "Recommended" && filterVal === "Recommendations")
      return "";
    else
      return `filterParam/${filterParam.toLowerCase()}/filterValue/${filterVal}`;
  });

  const { queryOptions } = APIs[queryKey];
  const {
    isLoading,
    error,
    data: Treks,
  } = useQuery({
    queryKey: [queryKey, queryKeyID],
    ...queryOptions,
    enabled: !!filterParam && !!filterVal,
  });

  useEffect(() => {
    if (!filterParam || !filterVal) return;

    if (filterParam === "Recommended" && filterVal === "Recommendations") {
      setQueryKeyID("");
      setQueryKey("recommended-treks");
    } else {
      setQueryKey("category-treks");
      setQueryKeyID(
        `filterParam/${filterParam.toLowerCase()}/filterValue/${filterVal}`
      );
    }
  }, [filterParam, filterVal]);

  return (
    <Protected>
      <section>
        <header className="w-full h-fit bg-[cornflowerblue] flex py-6 px-8 flex-col md:flex-row">
          <BackButton />

          <Filters
            isLoading={isLoading}
            filterParam={filterParam}
            filterVal={filterVal}
            setFilters={setFilters}
          />
        </header>
        {isLoading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : Treks ? (
          <ShowTreks treks={Treks} />
        ) : (
          <p className="opacity-50 font-semibold w-full text-center text-lg py-4">
            Please select filters to know more about treks.
          </p>
        )}
      </section>
    </Protected>
  );
}
