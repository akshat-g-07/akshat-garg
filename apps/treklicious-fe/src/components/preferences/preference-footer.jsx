import { Button } from "@/components/ui/button";

export default function PreferenceFooter({
  answers,
  question,
  isLoading,
  activeIndx,
  handleClick,
}) {
  return (
    <>
      <div className="md:col-span-2 flex w-full justify-between items-center-safe h-fit gap-x-2 md:gap-x-4 lg:gap-x-10">
        <Button
          size="lg"
          disabled={activeIndx === 0 || isLoading}
          className="md:col-span-2 w-fit justify-self-center-safe cursor-pointer"
          onClick={() => {
            handleClick(-1);
          }}
        >
          Back
        </Button>
        <Button
          size="lg"
          className="md:col-span-2 w-fit justify-self-center-safe cursor-pointer"
          onClick={() => {
            handleClick(+1);
          }}
          disabled={answers[question] === "NA" || isLoading}
        >
          {activeIndx === 2 ? "Finish" : "Next"}
        </Button>
      </div>
    </>
  );
}
