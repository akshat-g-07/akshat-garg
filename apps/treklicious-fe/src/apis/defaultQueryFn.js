import fetch from "@/lib/fetch";

import { APIs } from ".";
import { getAccessToken } from "@/lib/access-token";

export default async function defaultQueryFn({ queryKey, meta }) {
  const { baseURL, apiVersion, route, baseRoute, authorization } =
    APIs[queryKey[0]];
  const ID = queryKey[1] || "";

  const options = meta?.options || {};
  options.headers = {};

  if (authorization) options.headers["Authorization"] = getAccessToken();

  const url = baseURL + "/api" + apiVersion + baseRoute + route + ID;

  const res = await fetch(url, options);
  return res;
}
