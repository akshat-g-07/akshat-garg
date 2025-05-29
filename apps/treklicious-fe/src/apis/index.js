import {
  TREK_ROUTE,
  USER_ROUTE,
  AUTH_ROUTE,
} from "@repo/treklicious-constants";
import { queryOptions } from "@tanstack/react-query";

const baseURL = import.meta.env.VITE_API_HOST;

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
    authorization: true,
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
    authorization: true,
  },
  "put-profile": {
    baseURL,
    apiVersion: "/v1",
    route: "/profile",
    baseRoute: USER_ROUTE,
    authorization: true,
    method: "PUT",
    queryInvalidate: ["get-profile"],
    mutationOptions: {
      retry: 2,
    },
  },
  "get-favorites": {
    baseURL,
    apiVersion: "/v1",
    route: "/favorites",
    baseRoute: USER_ROUTE,
    authorization: true,
  },
  "check-favorite": {
    baseURL,
    apiVersion: "/v1",
    route: "/check-favorite",
    baseRoute: USER_ROUTE,
    authorization: true,
    queryOptions: {
      refetchOnMount: true,
    },
  },
  "post-favorite": {
    baseURL,
    apiVersion: "/v1",
    route: "/favorites",
    baseRoute: USER_ROUTE,
    authorization: true,
    method: "POST",
    queryInvalidate: ["check-favorite", "get-favorites"],
    mutationOptions: {
      retry: 2,
    },
  },
  "delete-favorite": {
    baseURL,
    apiVersion: "/v1",
    route: "/favorites",
    baseRoute: USER_ROUTE,
    authorization: true,
    method: "DELETE",
    queryInvalidate: ["check-favorite", "get-favorites"],
    mutationOptions: {
      retry: 2,
    },
  },
  "sign-up": {
    baseURL,
    apiVersion: "/v1",
    route: "/signup",
    baseRoute: AUTH_ROUTE,
    method: "POST",
    mutationOptions: {
      retry: 2,
    },
  },
  "log-in": {
    baseURL,
    apiVersion: "/v1",
    route: "/login",
    baseRoute: AUTH_ROUTE,
    method: "POST",
    mutationOptions: {
      retry: 2,
    },
  },
  "log-out": {
    baseURL,
    apiVersion: "/v1",
    route: "/logout",
    baseRoute: AUTH_ROUTE,
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
