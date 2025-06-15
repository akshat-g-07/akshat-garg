import { APIs } from "@/apis";
import { useQuery } from "@tanstack/react-query";
import { Info } from "lucide-react";
import { useNavigate } from "react-router";

import { Button } from "@/components/ui/button";

import Loading from "../common/loading";

export default function VideoSection() {
  const vidSrc = import.meta.env.VITE_DASHBOARD_VIDEO;
  const navigate = useNavigate();
  const queryKey = "random-trek";
  const { queryOptions } = APIs[queryKey];

  const {
    isLoading,
    error,
    data: Trek,
  } = useQuery({
    queryKey: [queryKey],
    ...queryOptions,
  });

  return (
    <section className="w-full h-[calc(100vh-56px)] md:h-[calc(100vh-64px)] relative">
      <div className="absolute -z-10 size-full overflow-hidden object-center object-cover">
        <video
          src={vidSrc}
          muted
          autoPlay
          loop
          className="size-full object-cover"
        />
      </div>
      {error ? (
        <></>
      ) : (
        <div className="w-3/7 h-full bg-gradient-to-r from-black to-black/5 from-20% p-4 justify-between flex flex-col text-white">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div className="h-8/9 flex flex-col space-y-4 overflow-hidden">
                <div className="h-fit w-full text-2xl font-semibold text-shadow-black text-shadow-md">
                  {Trek.name}
                </div>
                <div className="flex-1 w-full text-balance line-clamp-21 md:line-clamp-20">
                  {Trek.description}
                </div>
              </div>
              <div className="h-1/9 w-full">
                <Button
                  size="lg"
                  variant="secondary"
                  className="space-x-2 cursor-pointer"
                  onClick={() => {
                    navigate(`/trek/${Trek._id}`);
                  }}
                >
                  <Info className="size-4" />
                  <span>More Info</span>
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
}
