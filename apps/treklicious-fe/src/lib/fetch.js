import { customAlphabet } from "nanoid";

export default async function (url, options = {}) {
  const nanoid = customAlphabet("1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ", 5);
  const requestID = nanoid();

  const res = await fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      "request-id": requestID,
    },
  });
  return await res.json();
}
