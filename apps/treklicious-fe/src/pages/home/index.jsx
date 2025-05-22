import { Keys } from "@/apis/keys";
import CallToAction from "@/components/home/call-to-action";
import HeroSection from "@/components/home/hero-section";
import Season from "@/components/home/season";
import State from "@/components/home/state";
import Testimonial from "@/components/home/testimonial";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const queryKey = "all-treks";
  const { meta, queryOptions } = Keys[queryKey];
  const {
    isLoading,
    error,
    data: Treks,
  } = useQuery({
    queryKey: [queryKey],
    meta,
    ...queryOptions,
  });

  if (error) console.log("Error in Home", error);
  return (
    <>
      <section className="flex flex-col items-center relative">
        <HeroSection />
        <CallToAction />
        {!error && <Season Treks={Treks} isLoading={isLoading} />}
        {!error && <State Treks={Treks} isLoading={isLoading} />}
        <Testimonial />
      </section>
    </>
  );
}
