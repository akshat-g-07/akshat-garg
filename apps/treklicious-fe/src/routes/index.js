import { createBrowserRouter } from "react-router";
import Home from "@/pages/home";
import SignUp from "@/pages/sign-up";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/sign-up",
    Component: SignUp,
  },
]);
