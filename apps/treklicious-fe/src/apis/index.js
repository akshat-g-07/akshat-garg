import { getAccessToken } from "@/lib/access-token";
import { TREK_ROUTE, USER_ROUTE } from "@repo/treklicious-constants";
import { queryOptions } from "@tanstack/react-query";

const baseURL = import.meta.env.VITE_API_HOST;

let defaultMeta = {};

let accessToken = getAccessToken();

if (accessToken) {
  defaultMeta = {
    options: {
      headers: {
        Authorization: getAccessToken(),
      },
    },
  };
}

export const APIs = {
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
  "trek-by-trekID": {
    baseURL,
    apiVersion: "/v1",
    route: "/trekID",
    baseRoute: TREK_ROUTE,
  },
  "all-names": {
    baseURL,
    apiVersion: "/v1",
    route: "/allNames",
    baseRoute: TREK_ROUTE,
    queryOptions: queryOptions({
      staleTime: 60 * 60 * 1000,
      refetchOnReconnect: false,
    }),
  },
  "random-trek": {
    baseURL,
    apiVersion: "/v1",
    route: "/random",
    baseRoute: TREK_ROUTE,
    queryOptions: queryOptions({
      staleTime: 10 * 60 * 1000,
      refetchOnMount: true,
    }),
  },
  "category-treks": {
    baseURL,
    apiVersion: "/v1",
    route: "/category",
    baseRoute: TREK_ROUTE,
    queryOptions: queryOptions({
      staleTime: 10 * 60 * 1000,
      refetchOnMount: true,
    }),
  },
  "recommended-treks": {
    baseURL,
    apiVersion: "/v1",
    route: "/recommended",
    baseRoute: USER_ROUTE,
    queryOptions: queryOptions({
      staleTime: 10 * 60 * 1000,
      refetchOnMount: true,
    }),
    meta: defaultMeta,
  },
  "get-profile": {
    baseURL,
    apiVersion: "/v1",
    route: "/profile",
    baseRoute: USER_ROUTE,
    queryOptions: queryOptions({
      staleTime: 30 * 60 * 1000,
      refetchOnMount: true,
    }),
    meta: defaultMeta,
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
