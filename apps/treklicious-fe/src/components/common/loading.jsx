import { Loader } from "lucide-react";

import { cn } from "@/lib/utils";

export default function Loading({ className }) {
  return (
    <>
      <div
        className={cn(
          "relative size-full flex items-center-safe justify-center-safe p-8",
          className
        )}
      >
        <Loader className="animate-spin size-6" />
      </div>
    </>
  );
}
