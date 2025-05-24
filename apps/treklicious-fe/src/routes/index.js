import { createBrowserRouter } from "react-router";
import Home from "@/pages/home";
import SignUp from "@/pages/sign-up";
import LogIn from "@/pages/log-in";
import Preferences from "@/pages/preferences";
import Dashboard from "@/pages/dashboard";
import ExploreAll from "@/pages/explore-all";
import Profile from "@/pages/profile";
import Favorites from "@/pages/favorites";
import Trek from "@/pages/trek";
import { queryClient } from "@/lib/query-client";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/sign-up",
    Component: SignUp,
  },
  {
    path: "/log-in",
    Component: LogIn,
  },
  {
    path: "/preferences",
    Component: Preferences,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/explore-all",
    Component: ExploreAll,
  },
  {
    path: "/profile",
    Component: Profile,
  },
  {
    path: "/favorites",
    Component: Favorites,
  },
  {
    path: "/trek/:trekID",
    Component: Trek,
    loader: async ({ params }) => {
      const trekID = params.trekID;

      const data = await queryClient.ensureQueryData({
        queryKey: ["trek-by-trekID", trekID],
      });

      return { trek: data };
    },
  },
]);
