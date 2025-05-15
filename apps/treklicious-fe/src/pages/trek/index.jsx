import BackButton from "@/components/common/back-button";
import { Preferences } from "@/components/preferences/preferences";
import { Heart } from "lucide-react";
import { useLoaderData } from "react-router";

export default function Trek() {
  const data = useLoaderData();
  const { name, season, difficulty, state, img, description } = data.trek;

  return (
    <section className="w-full min-h-svh relative">
      <BackButton className="absolute top-5 md:left-10 left-1/2 -translate-x-1/2 md:translate-x-0 z-10" />
      <div className="w-full h-[50vh]">
        <img src={img} className="size-full object-cover object-center" />
      </div>
      <div className="absolute z-10 h-fit w-4/5 left-1/2 -translate-x-1/2 -mt-50 backdrop-blur-sm rounded [box-shadow:0_0_40px_rgba(8,7,16,.6)] [border:2px_solid_hsla(0,0%,100%,.1)] bg-[#ffffff2d] *:w-full py-15 px-10">
        <div className="flex justify-between items-center-safe">
          <h1 className="text-2xl md:text-5xl font-[Alegreya_SC,serif] font-bold">
            {name}
          </h1>
          <p>
            <Heart className="size-6 md:size-10 font-bold" />
          </p>
        </div>
        <div className="h-1.5 bg-gradient-to-r from-black to-black/0 my-4" />
        <div className="flex flex-col lg:flex-row justify-around items-center-safe *:flex *:items-center-safe space-y-3">
          <div>
            <p className="size-6 mr-1">{Preferences[0].svg}</p>
            <p className="text-white text-lg md:text-2xl font-semibold">
              State:&nbsp;
              <span className="text-black">{state}</span>
            </p>
          </div>
          <div>
            <p className="size-6 mr-1">{Preferences[1].svg}</p>
            <p className="text-white text-lg md:text-2xl font-semibold">
              Season:&nbsp;
              <span className="text-black">{season}</span>
            </p>
          </div>
          <div>
            <p className="size-6 mr-1">{Preferences[2].svg}</p>
            <p className="text-white text-lg md:text-2xl font-semibold">
              Difficulty:&nbsp;
              <span className="text-black">{difficulty}</span>
            </p>
          </div>
        </div>
        <div className="py-8">{description} </div>
      </div>
    </section>
  );
}
