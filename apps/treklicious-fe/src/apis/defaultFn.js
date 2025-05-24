import fetch from "@/lib/fetch";
import { getAccessToken } from "@/lib/access-token";

import { APIs } from ".";

export default async function ({ queryKey, data }) {
  const { baseURL, apiVersion, route, baseRoute, authorization, method } =
    APIs[queryKey[0]];
  let ID = "";

  if (queryKey[1]) ID = "/" + queryKey[1];

  const url = baseURL + "/api" + apiVersion + baseRoute + route + ID;

  const options = {};
  options.headers = {};

  options.method = method ? method : "GET";
  if (method === "POST" || method === "PUT")
    options.headers["Content-Type"] = "application/json";

  if (authorization) options.headers["Authorization"] = getAccessToken();

  if (data) {
    options.body = JSON.stringify(data);
  }

  const res = await fetch(url, options);
  return res;
}
