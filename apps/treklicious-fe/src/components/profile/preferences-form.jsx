import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMemo } from "react";

import { useForm, Controller } from "react-hook-form";

import Treks from "@/assets/Treks.json";

export default function PreferencesForm({
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

  // Example data - replace with your actual options
  const stateOptions = useMemo(
    () => [...new Set(Treks.map((trek) => trek.state))],
    [Treks]
  );

  const seasonOptions = ["Summer", "Monsoon", "Winter"];

  const difficultyOptions = ["Easy", "Medium", "Hard"];

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <>
      <h2
        id="preferences"
        className="pb-2 border-b-2 border-black w-full text-3xl font-semibold cursor-default mt-12"
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger
                  id="state"
                  className=" text-lg w-full max-w-65 justify-self-center-safe"
                >
                  <SelectValue placeholder="Select a state" />
                </SelectTrigger>
                <SelectContent>
                  {stateOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
            type="submit"
            size="lg"
            className="md:col-span-2 w-fit justify-self-center-safe cursor-pointer mt-4 md:mt-0"
          >
            Update
          </Button>
        </div>
      </form>
    </>
  );
}
