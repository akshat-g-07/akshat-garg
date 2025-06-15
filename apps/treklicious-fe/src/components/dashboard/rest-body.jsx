import { APIs } from "@/apis";
import { useQuery } from "@tanstack/react-query";

import ComponentGenerator from "@/lib/component-generator";

import Loading from "../common/loading";
import TrekSection from "./trek-section";

export default function RestBody() {
  const queryKey = "all-treks";
  const { queryOptions } = APIs[queryKey];
  const {
    isLoading: allTreksIsLoading,
    error: allTreksError,
    data: allTreks,
  } = useQuery({
    queryKey: [queryKey],
    ...queryOptions,
  });

  const recommendedQueryKey = "recommended-treks";
  const { queryOptions: recommendedQueryOptions } = APIs[recommendedQueryKey];
  const { data: RecommendedTreks } = useQuery({
    queryKey: [recommendedQueryKey],
    ...recommendedQueryOptions,
  });

  if (allTreksError) {
    console.log("Error in RestBody All Treks", allTreksError);
    return <></>;
  }

  if (allTreksIsLoading) {
    return <Loading />;
  }

  const trekDetailComponents = ComponentGenerator(allTreks);

  if (RecommendedTreks && RecommendedTreks.length > 0)
    trekDetailComponents.push({
      sectionHead: "Recommended For You",
      sectionArray: RecommendedTreks.sort(() => Math.random() - 0.5).slice(
        0,
        10
      ),
      filterParameter: "Recommended",
      filterValue: "Recommendations",
    });

  return (
    <section className="py-10 px-4 space-y-8">
      {trekDetailComponents.reverse().map((trek, index) => (
        <TrekSection key={index} {...trek} />
      ))}
    </section>
  );
}
