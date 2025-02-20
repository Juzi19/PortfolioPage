import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  i18n:{
    locales: ["en", "de"],
    defaultLocale: "de",
    localeDetection: false
  }
};

export default nextConfig;
