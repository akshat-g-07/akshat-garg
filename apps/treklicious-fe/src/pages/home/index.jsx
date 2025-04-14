import CallToAction from "@/components/home/call-to-action";
import HeroSection from "@/components/home/hero-section";
import Season from "@/components/home/season";

export default function Home() {
  return (
    <>
      <section className="w-full min-h-screen h-fit flex flex-col items-center">
        <HeroSection />
        <CallToAction />
        <Season />
      </section>
    </>
  );
}
