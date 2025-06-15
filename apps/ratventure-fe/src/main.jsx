import { createRoot } from "react-dom/client";

import "./index.css";

import { router } from "@/routes";
import { RouterProvider } from "react-router";

import Ref from "@/components/common/ref";

createRoot(document.getElementById("root")).render(
  <Ref>
    <RouterProvider router={router} />
  </Ref>
);
