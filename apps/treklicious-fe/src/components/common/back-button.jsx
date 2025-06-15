import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

export default function BackButton({ className }) {
  const navigate = useNavigate();
  return (
    <Button
      variant="secondary"
      className={cn("space-x-2 cursor-pointer w-fit", className)}
      onClick={() => {
        navigate(-1);
      }}
    >
      <ChevronLeft className="size-4" />
      Back
    </Button>
  );
}
