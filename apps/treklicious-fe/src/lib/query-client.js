import defaultMutationFn from "@/apis/defaultMutationFn";
import defaultQueryFn from "@/apis/defaultQueryFn";
import { QueryClient } from "@tanstack/react-query";

globalThis.queryClient =
  globalThis.queryClient ||
  new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: defaultQueryFn,
        staleTime: 15 * 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
        refetchOnMount: false,
      },
      mutations: {
        mutationFn: defaultMutationFn,
      },
    },
  });

const queryClient = globalThis.queryClient;

if (import.meta.env.NODE_ENV !== "production") {
  globalThis.queryClient = queryClient;
}

export { queryClient };
