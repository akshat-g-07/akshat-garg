import Treks from "@/assets/Treks.json";
import ComponentGenerator from "@/lib/component-generator";
import TrekSection from "./trek-section";

export default function RestBody() {
  // pull the array of recommended treks from api here
  const recommendedTreks = Treks.slice(0, 10);
  const trekDetailComponents = ComponentGenerator();
  trekDetailComponents.push({
    sectionHead: "Recommended For You",
    sectionArray: recommendedTreks.sort(() => Math.random() - 0.5).slice(0, 10),
    filterParameter: "Recommended",
    filterValue: "Recommendations",
  });

  //   update the trek id
  return (
    <section className="py-10 px-4 space-y-8">
      {trekDetailComponents.reverse().map((trek, index) => (
        <TrekSection key={index} {...trek} />
      ))}
    </section>
  );
}
