"use client"
import dynamic from "next/dynamic";

const TranslationProvider = dynamic(() => import("@/translations/provider"), { ssr: false });
export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return <TranslationProvider>{children}</TranslationProvider>;
}