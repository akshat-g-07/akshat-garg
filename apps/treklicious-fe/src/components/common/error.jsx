import { cn } from "@/lib/utils";
import { TriangleAlert } from "lucide-react";

export default function Error({ className }) {
  return (
    <>
      <div
        className={cn(
          "relative size-full flex items-center-safe justify-center-safe p-8 text-red-500 space-x-2",
          className
        )}
      >
        <TriangleAlert className="size-5 opacity-75" />
        <span className="text-lg">
          Something went wrong. Please try again later!
        </span>
      </div>
    </>
  );
}
