import { createRoot } from "react-dom/client";

import "./index.css";

import { router } from "@/routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router";

import { queryClient } from "@/lib/query-client";

import Ref from "@/components/common/ref";

createRoot(document.getElementById("root")).render(
  <Ref>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </Ref>
);
