import { QueryClient } from "@tanstack/react-query";

globalThis.queryClient = globalThis.queryClient || new QueryClient();

const queryClient = globalThis.queryClient;

if (import.meta.env.NODE_ENV !== "production") {
  globalThis.queryClient = queryClient;
}

export { queryClient };
