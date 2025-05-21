import fetch from "@/lib/fetch";
import { TREK_ROUTE } from "@repo/treklicious-constants";
import { apiv1, baseURL } from "@/apis/constants";

export default async function AllTreks() {
  const url = baseURL + apiv1 + TREK_ROUTE;
  const res = await fetch(url);
  return res;
}
