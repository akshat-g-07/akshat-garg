import ComponentGenerator from "@/lib/component-generator";
import TrekSection from "./trek-section";
import { APIs } from "@/apis";
import { useQuery } from "@tanstack/react-query";
import Loading from "../common/loading";

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

  if (allTreksError) {
    console.log("Error in RestBody All Treks", allTreksError);
    return <></>;
  }
  console.log("allTreksIsLoading", allTreksIsLoading);

  if (allTreksIsLoading) {
    return <Loading />;
  }

  const trekDetailComponents = ComponentGenerator(allTreks);

  // pull the array of recommended treks from api here
  const recommendedTreks = allTreks.slice(0, 10);
  trekDetailComponents.push({
    sectionHead: "Recommended For You",
    sectionArray: recommendedTreks.sort(() => Math.random() - 0.5).slice(0, 10),
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
