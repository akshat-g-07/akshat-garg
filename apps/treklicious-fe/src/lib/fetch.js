import { customAlphabet } from "nanoid";
import { getAccessToken, setAccessToken } from "./access-token";
import { AUTH_ROUTE } from "@repo/treklicious-constants";

export default async function fetchFunction(url, options = {}) {
  const nanoid = customAlphabet("1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ", 5);
  const requestID = nanoid();

  const res = await fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      "request-id": requestID,
    },
  });

  if (res.status === 403) {
    const baseURL = import.meta.env.VITE_API_HOST;
    const refreshURL = baseURL + "/api" + "/v1" + AUTH_ROUTE + "/refresh";
    const refreshRequestID = nanoid();

    const refreshResponse = await fetch(refreshURL, {
      credentials: "include",
      headers: {
        "request-id": refreshRequestID,
      },
    });
    if (refreshResponse.status === 200) {
      const data = await refreshResponse.json();

      setAccessToken(data.accessToken);
      options.headers["Authorization"] = getAccessToken();
    }
    return fetchFunction(url, options);
  }

  return await res.json();
}
