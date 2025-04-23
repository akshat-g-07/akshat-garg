import CallToAction from "@/components/home/call-to-action";
import HeroSection from "@/components/home/hero-section";
import Season from "@/components/home/season";
import State from "@/components/home/state";
import Testimonial from "@/components/home/testimonial";

export default function Home() {
  return (
    <>
      <section className="w-full min-h-screen h-[9600px] flex flex-col items-center relative">
        <HeroSection />
        <CallToAction />
        <Season />
        <State />
        <Testimonial />
      </section>
    </>
  );
}
