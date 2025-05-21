import fetch from "@/lib/fetch";
import { apiv1, baseURL } from "../apiConstants";

import { TREK_ROUTE } from "@repo/treklicious-constants";

export default async function GetTrekByID(trekID) {
  const url = baseURL + apiv1 + TREK_ROUTE + "/trekID/" + trekID;
  const res = await fetch(url);
  return res;
}
