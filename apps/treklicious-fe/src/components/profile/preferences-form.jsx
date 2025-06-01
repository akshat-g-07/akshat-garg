import { APIs } from "@/apis";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import { queryClient } from "@/lib/query-client";
import Loading from "../common/loading";
import { Loader } from "lucide-react";

export default function PreferencesForm({
  profile,
  defaultState,
  defaultSeason,
  defaultDifficulty,
}) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      state: defaultState,
      season: defaultSeason,
      difficulty: defaultDifficulty,
    },
  });

  const queryKey = "all-treks";
  const { queryOptions } = APIs[queryKey];
  const { isLoading, data: Treks } = useQuery({
    queryKey: [queryKey],
    ...queryOptions,
  });

  const mutationKey = "put-profile";
  const { mutationOptions, queryInvalidate } = APIs[mutationKey];
  const { isPending, mutate } = useMutation({
    mutationKey: [mutationKey],
    ...mutationOptions,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryInvalidate });
    },
  });

  const stateOptions = useMemo(() => {
    if (Treks && Treks.length)
      return [...new Set(Treks.map((trek) => trek.state))];
    else return [];
  }, [Treks]);

  const seasonOptions = ["Summer", "Monsoon", "Winter"];

  const difficultyOptions = ["Easy", "Medium", "Hard"];

  const watchedValues = useWatch({ control });
  const updateButtonDisable = useMemo(() => {
    const currentValues = watchedValues;

    const isStateChanged = currentValues.state !== defaultState;
    const isSeasonChanged = currentValues.season !== defaultSeason;
    const isDifficultyChanged = currentValues.difficulty !== defaultDifficulty;

    return isStateChanged || isSeasonChanged || isDifficultyChanged;
  }, [watchedValues, defaultState, defaultSeason, defaultDifficulty]);

  const onSubmit = (data) => {
    mutate({
      queryKey: [mutationKey],
      data: {
        ...profile,
        preferences: {
          ...data,
        },
      },
    });
  };

  return (
    <>
      <h2
        id="preferences"
        className="pb-2 border-b-2 border-black dark:border-white w-full text-3xl font-semibold cursor-default mt-12"
      >
        Preferences
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_6fr] gap-x-4 md:gap-y-6 items-center-safe w-full relative font-semibold md:py-6 *:[label]:w-full *:[label]:text-center *:[label]:mt-4 md:*:[label]:mt-0 *:[label]:mb-2 md:*:[label]:mb-0 md:*:[label]:text-left">
          <label htmlFor="state" className="text-xl">
            State
          </label>
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <Select
                disabled={isPending}
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <SelectTrigger
                  id="state"
                  className=" text-lg w-full max-w-65 justify-self-center-safe"
                >
                  <SelectValue placeholder="Select a state" />
                </SelectTrigger>
                <SelectContent>
                  {isLoading ? (
                    <Loading />
                  ) : (
                    <>
                      {stateOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </>
                  )}
                </SelectContent>
              </Select>
            )}
          />
          <label htmlFor="season" className="w-1/7 text-xl">
            Season
          </label>
          <Controller
            name="season"
            control={control}
            render={({ field }) => (
              <Select
                disabled={isPending}
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <SelectTrigger
                  id="season"
                  className=" text-lg w-full max-w-65 justify-self-center-safe"
                >
                  <SelectValue placeholder="Select a season" />
                </SelectTrigger>
                <SelectContent>
                  {seasonOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <label htmlFor="difficulty" className="w-1/7 text-xl">
            Difficulty
          </label>
          <Controller
            name="difficulty"
            control={control}
            render={({ field }) => (
              <Select
                disabled={isPending}
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <SelectTrigger
                  id="difficulty"
                  className=" text-lg w-full max-w-65 justify-self-center-safe"
                >
                  <SelectValue placeholder="Select a difficulty" />
                </SelectTrigger>
                <SelectContent>
                  {difficultyOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <Button
            size="lg"
            type="submit"
            disabled={!updateButtonDisable || isPending}
            className="md:col-span-2 w-fit justify-self-center-safe cursor-pointer mt-4 md:mt-0"
          >
            {isPending ? (
              <Loader className="animate-spin size-4 mx-7" />
            ) : (
              "Update"
            )}
          </Button>
        </div>
      </form>
    </>
  );
}
