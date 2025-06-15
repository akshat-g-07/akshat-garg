import { APIs } from "@/apis";
import { useQuery } from "@tanstack/react-query";

import Footer from "@/components/common/footer";
import CallToAction from "@/components/home/call-to-action";
import HeroSection from "@/components/home/hero-section";
import Season from "@/components/home/season";
import State from "@/components/home/state";
import Testimonial from "@/components/home/testimonial";

export default function Home() {
  const queryKey = "all-treks";
  const { queryOptions } = APIs[queryKey];
  const {
    isLoading,
    error,
    data: Treks,
  } = useQuery({
    queryKey: [queryKey],
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
        <Footer />
      </section>
    </>
  );
}
