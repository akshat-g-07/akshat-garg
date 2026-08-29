"use client";

import { useEffect, useState } from "react";

const PING_INTERVAL_MS = 5000;
const THRESHOLDS = { good: 150, ok: 400 }; // ms

const COLORS = {
  good: "text-green-500",
  ok: "text-yellow-400",
  bad: "text-red-500",
};

export default function WifiStatus() {
  const [status, setStatus] = useState("good");

  useEffect(() => {
    let cancelled = false;

    async function ping() {
      const start = performance.now();
      try {
        // cache-busted HEAD request to our own origin, timing acts as a "ping"
        await fetch(`/favicon.ico?_=${Date.now()}`, {
          method: "HEAD",
          cache: "no-store",
        });
        const rtt = performance.now() - start;
        if (cancelled) return;
        setStatus(
          rtt < THRESHOLDS.good ? "good" : rtt < THRESHOLDS.ok ? "ok" : "bad"
        );
      } catch {
        if (!cancelled) setStatus("bad");
      }
    }

    ping();
    const intervalId = setInterval(ping, PING_INTERVAL_MS);

    return () => {
      cancelled = true;
      clearInterval(intervalId);
    };
  }, []);

  return (
    <svg
      viewBox="0 0 24 24"
      className={`size-full ${COLORS[status]}`}
      fill="currentColor"
      aria-label={`Connection status: ${status}`}
    >
      <path d="M12 20a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM8.46 16.29a5 5 0 0 1 7.07 0l-1.42 1.42a3 3 0 0 0-4.24 0l-1.41-1.42ZM5.64 13.46a9 9 0 0 1 12.73 0l-1.42 1.42a7 7 0 0 0-9.9 0l-1.41-1.42ZM2.81 10.64a13 13 0 0 1 18.37 0l-1.41 1.41a11 11 0 0 0-15.55 0L2.81 10.64Z" />
    </svg>
  );
}
