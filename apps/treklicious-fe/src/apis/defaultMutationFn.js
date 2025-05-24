import fetch from "@/lib/fetch";

import { APIs } from ".";
import { getAccessToken } from "@/lib/access-token";

export default async function defaultMutationFn({ mutationKey, data }) {
  const { baseURL, apiVersion, route, baseRoute, authorization, method } =
    APIs[mutationKey[0]];
  const ID = mutationKey[1] || "";

  const url = baseURL + "/api" + apiVersion + baseRoute + route + ID;

  const options = {};
  options.headers = {};

  options.method = method;
  if (method === "POST" || method === "PUT")
    options.headers["Content-Type"] = "application/json";
  if (authorization) options.headers["Authorization"] = getAccessToken();

  if (data) {
    options.body = JSON.stringify(data);
  }

  const res = await fetch(url, options);
  return res;
}
