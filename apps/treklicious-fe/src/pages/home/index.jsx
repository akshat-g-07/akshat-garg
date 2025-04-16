import CallToAction from "@/components/home/call-to-action";
import HeroSection from "@/components/home/hero-section";
import Season from "@/components/home/season";
import State from "@/components/home/state";

export default function Home() {
  return (
    <>
      <section className="w-full min-h-screen h-[9600px] flex flex-col items-center">
        <HeroSection />
        <CallToAction />
        <Season />
        <State />
      </section>
    </>
  );
}
