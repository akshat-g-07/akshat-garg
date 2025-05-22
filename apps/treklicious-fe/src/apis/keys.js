import { TREK_ROUTE } from "@repo/treklicious-constants";
import { queryOptions } from "@tanstack/react-query";

const baseURL = import.meta.env.VITE_API_HOST;

export const Keys = {
  "all-treks": {
    baseURL,
    apiVersion: "/v1",
    route: "",
    baseRoute: TREK_ROUTE,
    queryOptions: queryOptions({
      staleTime: 30 * 60 * 1000,
      refetchOnReconnect: false,
    }),
  },
  // dummy below
  "with-headers": {
    baseURL,
    apiVersion: "/v1",
    route: "",
    baseRoute: TREK_ROUTE,
    queryOptions: queryOptions({
      staleTime: 30 * 60 * 1000,
      refetchOnReconnect: false,
    }),
    meta: {
      options: {
        headers: {
          Authorization: "Bearer your_token_here",
        },
      },
    },
  },
  "post-req": {
    queryKey: ["post-req"],
    baseURL,
    apiVersion: "/v1",
    route: "",
    baseRoute: TREK_ROUTE,
    queryOptions: queryOptions({
      staleTime: 30 * 60 * 1000,
      refetchOnReconnect: false,
    }),
    meta: {
      options: {
        method: "POST",
        headers: {
          Authorization: "Bearer your_token_here",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          key1: "value1",
          key2: "value2",
        }),
      },
    },
  },
  "trekby-ID": {
    queryKey: ["trekby-ID"],
    baseURL,
    apiVersion: "/v1",
    route: "/trekID",
    baseRoute: TREK_ROUTE,
    queryOptions: queryOptions({
      staleTime: 30 * 60 * 1000,
      refetchOnReconnect: false,
    }),
  },
};
