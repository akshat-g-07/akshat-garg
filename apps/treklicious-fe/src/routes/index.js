import { createBrowserRouter } from "react-router";
import Home from "@/pages/home";
import SignUp from "@/pages/sign-up";
import LogIn from "@/pages/log-in";
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
]);
