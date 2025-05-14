import Treks from "@/assets/Treks.json";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

export default function VideoSection() {
  const trekList = Treks.filter((trek) => trek.season === "Monsoon");
  const trek = trekList[Math.floor(Math.random() * trekList.length)];

  return (
    <section className="w-full h-[calc(100vh-56px)] md:h-[calc(100vh-64px)] relative">
      <div className="absolute bg-red-500 -z-10 size-full overflow-hidden object-center object-cover">
        {/* MARK: vid and all other images will upload at cloudinary and then from FE make a request to BE check cors and on BE pull from cloudinary and send back to FE */}
        <video
          src={"vidSrc"}
          muted
          autoPlay
          loop
          className="size-full bg-yellow-500"
        />
      </div>
      <div className="w-3/7 h-full bg-gradient-to-r from-black to-black/5 from-20% p-4 justify-between flex flex-col text-white">
        <div className="h-8/9 flex flex-col space-y-4 overflow-hidden">
          <div className="h-fit w-full text-2xl font-semibold text-shadow-black text-shadow-md">
            {trek.name}
          </div>
          <div className="flex-1 w-full text-balance line-clamp-21 md:line-clamp-20">
            {trek.description}
          </div>
        </div>
        <div className="h-1/9 w-full">
          {/* MARK: reroute to trek details using router & uuid */}
          <Button
            size="lg"
            variant="secondary"
            className="space-x-2 cursor-pointer"
          >
            <Info className="size-4" />
            <span>More Info</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
