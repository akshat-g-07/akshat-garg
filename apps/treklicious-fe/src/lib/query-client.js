import defaultFn from "@/apis/defaultFn";
import { QueryClient } from "@tanstack/react-query";

globalThis.queryClient =
  globalThis.queryClient ||
  new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: defaultFn,
        staleTime: 15 * 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
        refetchOnMount: false,
      },
      mutations: {
        mutationFn: defaultFn,
      },
    },
  });

const queryClient = globalThis.queryClient;

if (import.meta.env.NODE_ENV !== "production") {
  globalThis.queryClient = queryClient;
}

export { queryClient };
