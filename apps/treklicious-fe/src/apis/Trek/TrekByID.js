import fetch from "@/lib/fetch";
import { apiv1, baseURL } from "@/apis/constants";

import { TREK_ROUTE } from "@repo/treklicious-constants";

export default async function TrekByID({ queryKey }) {
  const trekID = queryKey[1];
  const url = baseURL + apiv1 + TREK_ROUTE + "/trekID/" + trekID;
  const res = await fetch(url);
  return res;
}
