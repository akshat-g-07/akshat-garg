import Landing from "@/pages/landing";
import SetMatrix from "@/pages/set-matrix";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/set-matrix",
    Component: SetMatrix,
  },
]);
