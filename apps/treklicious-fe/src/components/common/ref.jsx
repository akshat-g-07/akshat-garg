import { useEffect } from "react";
import { parseCookies, setCookie } from "nookies";

export default function Ref({ children }) {
  const urlParams = new URLSearchParams(window.location.search);
  const refVal = urlParams.get("ref");

  const cookies = parseCookies();
  const ref = cookies.ref;

  useEffect(() => {
    if (ref == undefined)
      if (!refVal || refVal === "rec") {
        setCookie(null, "ref", "rec", {
          expires: new Date("9999-12-31T23:59:59.000Z"),
        });
      } else {
        setCookie(null, "ref", "oth", {
          expires: new Date("9999-12-31T23:59:59.000Z"),
        });
        const SERVICE = import.meta.env.VITE_SERVICE;
        const url = new URL(SERVICE);
        url.searchParams.append("ref", refVal);
        fetch(url);
      }
    const windowURL = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, windowURL);
  }, [ref, refVal]);

  return <>{children}</>;
}
