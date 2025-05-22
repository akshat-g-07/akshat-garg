import fetch from "@/lib/fetch";

import { Keys } from "./keys";

export default async function defaultQueryFn({ queryKey, meta }) {
  const { baseURL, apiVersion, route, baseRoute } = Keys[queryKey[0]];
  const ID = queryKey[1] || "";

  const options = meta?.options || {};
  const url = baseURL + "/api" + apiVersion + baseRoute + route + ID;

  const res = await fetch(url, options);
  return res;
}
