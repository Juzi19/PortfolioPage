import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import { TranslationProvider } from "@/translations/provider";

export const metadata: Metadata = {
  title: "Justus Zimmermann - Web developer",
  description: "Web developer, ready to face new, exciting challenges",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <TranslationProvider>
        <body>
        <Header></Header>
        <main>
          {children}
        </main>
        <Footer></Footer>
        </body>
      </TranslationProvider>
      
    </html>
  );
}
