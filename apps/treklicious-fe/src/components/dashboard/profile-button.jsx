import { Link } from "react-router";
import normalSrc from "../../assets/profile-normal.png";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Heart, LogOut, Settings } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { APIs } from "@/apis";
import { useQuery } from "@tanstack/react-query";
import Loading from "../common/loading";

export default function ProfileButton({ isFocused }) {
  const queryKey = "get-profile";
  const { queryOptions, meta } = APIs[queryKey];
  const {
    isLoading,
    error,
    data: Profile,
  } = useQuery({
    queryKey: [queryKey],
    ...queryOptions,
    meta,
  });

  const options = [
    {
      link: "/profile",
      text: "Profile",
      icon: <UserProfilePic src={error ? normalSrc : Profile?.profile} />,
      divider: true,
    },
    {
      link: "/favorites",
      text: "My Favorites",
      icon: <Heart className="size-4" />,
      divider: false,
    },
    {
      link: "/profile#preferences",
      text: "My Preferences",
      icon: <Settings className="size-4" />,
      divider: true,
    },
    {
      link: "/log-out",
      text: "Logout",
      icon: <LogOut className="size-4" />,
      divider: false,
    },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "size-8 rounded-full cursor-pointer overflow-hidden",
            isFocused && "hidden md:block"
          )}
        >
          {isLoading ? (
            <Loading />
          ) : (
            <UserProfilePic
              size="lg"
              src={error ? normalSrc : Profile?.profile}
            />
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-60 space-y-1">
        {options.map(({ link, text, icon, divider }, index) => (
          <React.Fragment key={index}>
            <Link
              to={link}
              className={cn(
                "flex items-center-safe gap-x-2 p-2 hover:bg-gray-300 rounded"
              )}
            >
              {icon}
              {text}
            </Link>
            {divider && <div className="w-full h-px bg-gray-400" />}
          </React.Fragment>
        ))}
      </PopoverContent>
    </Popover>
  );
}

function UserProfilePic({ size = "sm", src }) {
  return (
    <img
      src={src}
      alt={"Profile Pic"}
      className={cn(size === "sm" ? "size-4" : "size-8")}
    />
  );
}
