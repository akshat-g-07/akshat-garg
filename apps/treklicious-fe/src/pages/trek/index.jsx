import { queryClient } from "@/lib/query-client";
import { APIs } from "@/apis";
import BackButton from "@/components/common/back-button";
import { Preferences } from "@/components/preferences/preferences";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Heart } from "lucide-react";
import { useLoaderData } from "react-router";
import { cn } from "@/lib/utils";

export default function Trek() {
  const data = useLoaderData();
  const { _id, name, season, difficulty, state, img, description } = data.trek;

  const checkQueryKey = "check-favorite";
  const { queryOptions: checkQueryOptions } = APIs[checkQueryKey];
  const {
    isLoading: isCheckLoading,
    error: checkError,
    data: CheckFavorite,
  } = useQuery({
    queryKey: [checkQueryKey, _id],
    ...checkQueryOptions,
  });

  const postFavorite = "post-favorite";
  const {
    mutationOptions: postFavoriteOptions,
    queryInvalidate: postQueryInvalidate,
  } = APIs[postFavorite];
  const { isPending: postPending, mutate: postMutate } = useMutation({
    mutationKey: [postFavorite],
    ...postFavoriteOptions,
    onSuccess: () => {
      postQueryInvalidate.forEach((query) =>
        queryClient.invalidateQueries({ queryKey: [query] })
      );
    },
  });

  const deleteFavorite = "delete-favorite";
  const {
    mutationOptions: deleteFavoriteOptions,
    queryInvalidate: deleteQueryInvalidate,
  } = APIs[deleteFavorite];
  const { isPending: deletePending, mutate: deleteMutate } = useMutation({
    mutationKey: [deleteFavorite],
    ...deleteFavoriteOptions,
    onSuccess: () => {
      deleteQueryInvalidate.forEach((query) =>
        queryClient.invalidateQueries({ queryKey: [query] })
      );
    },
  });

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

          {isCheckLoading ? (
            <></>
          ) : (
            <>
              {checkError ? (
                <></>
              ) : (
                <p>
                  <Heart
                    fill={CheckFavorite ? "red" : "transparent"}
                    strokeWidth={CheckFavorite ? 0 : 2}
                    className={cn(
                      "size-6 md:size-10 font-bold cursor-pointer",
                      deletePending || postPending
                        ? "opacity-75"
                        : "opacity-100"
                    )}
                    onClick={() => {
                      if (CheckFavorite)
                        deleteMutate({
                          queryKey: [deleteFavorite, _id],
                        });
                      else
                        postMutate({
                          queryKey: [postFavorite],
                          data: {
                            favorite: _id,
                          },
                        });
                    }}
                  />
                </p>
              )}
            </>
          )}
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
