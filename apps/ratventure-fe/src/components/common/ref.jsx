import { useEffect } from "react";
import { parseCookies, setCookie } from "nookies";

export default function Ref({ children }) {
  const urlParams = new URLSearchParams(window.location.search);
  console.log("1", urlParams);
  const refVal = urlParams.get("ref");
  console.log("2", refVal);

  const cookies = parseCookies();
  console.log("3", cookies);
  const ref = cookies.ref;
  console.log("4", ref);

  useEffect(() => {
    if (ref == undefined)
      if (!refVal || refVal === "rec") {
        console.log("5");
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
    console.log("6", windowURL);
    window.history.replaceState({}, document.title, windowURL);
    window.location.reload();
  }, [ref, refVal]);

  return <>{children}</>;
}
