import Landing from "@/pages/landing";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
]);
