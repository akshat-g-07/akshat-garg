import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const options = [
    {
      link: "/profile",
      text: "My Profile",
    },
    {
      link: "/favorites",
      text: "My Favorites",
    },
  ];

  return (
    <nav className="bg-[#6495ed] min-h-svh w-1/3 px-4 py-10">
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

      <div className="h-10/11 py-5 flex flex-col">
        {options.map(({ link, text }) => (
          <Link
            to={link}
            key={link}
            className={cn(
              "w-full h-fit py-2 my-2 text-black cursor-pointer hover:underline",
              location.pathname === link &&
                "bg-[#d3d3d3] [box-shadow:2px_2px_10px_#000] scale-120 px-4"
            )}
          >
            {text}
          </Link>
        ))}
      </div>
    </nav>
  );
}
