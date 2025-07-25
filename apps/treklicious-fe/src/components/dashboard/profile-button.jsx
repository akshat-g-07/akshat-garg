import React from "react";
import { APIs } from "@/apis";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Heart, LogOut, Settings } from "lucide-react";
import { Link, useNavigate } from "react-router";

import { cn } from "@/lib/utils";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import normalSrc from "../../assets/profile-normal.png";
import Loading from "../common/loading";

export default function ProfileButton({ isFocused }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const queryKey = "get-profile";
  const { queryOptions } = APIs[queryKey];
  const {
    isLoading,
    error,
    data: Profile,
  } = useQuery({
    queryKey: [queryKey],
    ...queryOptions,
  });

  const mutationKey = "log-out";
  const { queryInvalidate } = APIs[mutationKey];
  const { mutate } = useMutation({
    mutationKey: [mutationKey],
    onSuccess: () => {
      localStorage.removeItem("accessToken");
      queryClient.invalidateQueries({ queryKey: queryInvalidate });
      navigate("/");
    },
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
      onClick: () => {
        mutate({
          queryKey: [mutationKey],
        });
      },
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
        {options.map(({ link, text, icon, divider, onClick }, index) => (
          <React.Fragment key={index}>
            <Link
              to={link}
              onClick={onClick}
              className={cn(
                "flex items-center-safe gap-x-2 p-2 hover:bg-gray-300 dark:hover:bg-input/50 rounded"
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
      className={cn(size === "sm" ? "size-4" : "size-8", "rounded-full")}
    />
  );
}
