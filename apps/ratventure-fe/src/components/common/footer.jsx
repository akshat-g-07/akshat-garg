import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { parseCookies } from "nookies";

import { cn } from "@/lib/utils";

export default function Footer({ response }) {
  const [config, setConfig] = useState([]);

  useEffect(() => {
    const cookies = parseCookies();
    const ref = cookies.ref;

    const AG_URL = import.meta.env.VITE_AG_URL || "https://akshat-garg.com";
    const PV_URL = import.meta.env.VITE_PV_URL || "https://pixelventurers.com";
    const IJ_URL = import.meta.env.VITE_IJ_URL || "https://initiatejs.dev";

    const globalConfig = [
      {
        label: "Made By",
        name: "Akshat Garg",
        url: AG_URL,
        className: "text-blue-500",
      },
      {
        label: "Made By",
        name: "Pixel Venturers",
        url: PV_URL,
        className: "text-blue-500",
      },
      {
        label: "Powered By",
        name: "InitiateJS",
        url: IJ_URL,
        className: "text-yellow-500",
      },
    ];

    if (ref === "rec") setConfig(globalConfig.slice(0, 1));
    if (ref === "oth") setConfig(globalConfig.slice(1));
  }, [response]);

  return (
    <footer className="w-full left-0 !h-fit border-t border-grid px-8 sm:px-6 md:px-12 py-5 justify-center fixed bottom-0 bg-gray-800 text-white z-50">
      {config.map((item) => (
        <FooterBody key={item.name} item={item} />
      ))}
    </footer>
  );
}

function FooterBody({ item: { label, name, url, className } }) {
  return (
    <div className="w-full mt-2 text-center flex items-center justify-center gap-x-1 text-base">
      <p>{label}</p>
      <a
        href={url}
        target="_blank"
        className={cn(
          "font-semibold hover:underline flex items-start",
          className
        )}
      >
        <span>{name}</span>
        <ArrowUpRight className="size-3" />
      </a>
    </div>
  );
}
