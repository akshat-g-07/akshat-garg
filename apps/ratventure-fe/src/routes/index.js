import Blocks from "@/pages/blocks";
import EndingPoint from "@/pages/ending-point";
import Landing from "@/pages/landing";
import SetMatrix from "@/pages/set-matrix";
import StartingPoint from "@/pages/starting-point";
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
  {
    path: "/starting-point",
    Component: StartingPoint,
  },
  {
    path: "/blocks",
    Component: Blocks,
  },
  {
    path: "/ending-point",
    Component: EndingPoint,
  },
]);
