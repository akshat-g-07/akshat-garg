import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

import { useNavigate } from "react-router";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      variant="secondary"
      className="space-x-2 cursor-pointer w-fit"
      onClick={() => {
        navigate(-1);
      }}
    >
      <ChevronLeft className="size-4" />
      Back
    </Button>
  );
}
