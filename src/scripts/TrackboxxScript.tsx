// app/TrackboxxScript.tsx
"use client";

import Script from "next/script";
import { useEffect } from "react";

export function TrackboxxScript() {
  useEffect(() => {
    const handleLoaded = () => {
      const tb = (window as any).trackboxx;
      if (!tb) return;
      tb("set", "siteId", "TB-74207478");
      tb("trackPageview");
    };
    document.addEventListener("tbScriptLoaded", handleLoaded);
    return () => document.removeEventListener("tbScriptLoaded", handleLoaded);
  }, []);

  return (
    <Script
      id="trackboxx"
      strategy="afterInteractive"
      src="https://cdn.trackboxx.info/p/tracker.js"
      onLoad={() => document.dispatchEvent(new Event("tbScriptLoaded"))}
    />
  );
}
