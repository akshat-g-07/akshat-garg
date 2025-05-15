import { cn } from "@/lib/utils";
import { useLocation, Link } from "react-router";
import BackButton from "./back-button";

export default function Sidebar() {
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
    <nav className="bg-[#6495ed] h-full w-1/3 px-4 py-10">
      <BackButton />
      <div className="h-10/11 py-5 flex flex-col">
        {options.map(({ link, text }) => (
          <Link
            to={link}
            key={link}
            className={cn(
              "w-full h-fit py-2 my-2 text-black cursor-pointer hover:underline",
              location.pathname === link &&
                "bg-[#d3d3d3] [box-shadow:2px_2px_10px_#000] scale-110 px-4 origin-left"
            )}
          >
            {text}
          </Link>
        ))}
      </div>
    </nav>
  );
}
