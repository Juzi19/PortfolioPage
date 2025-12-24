import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import ClientWrapper from "@/components/ClientWrapper";
import Script from "next/script";
import { TrackboxxScript } from "@/scripts/TrackboxxScript";

export const metadata: Metadata = {
  title: "Justus Zimmermann - Web developer",
  description: "Web developer, ready to face new, exciting challenges",
  keywords:"portfolio, web development, Fullstack, Munich, web developer",
  robots: "index, follow",
  icons: {
    icon: "./favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <meta name="google-site-verification" content="JMrVysuS0pj3Zz92Dp3BTloIWlaun7QZ6RmXnIZUY7w" />
        <TrackboxxScript />
      </head>
      <body>
      <ClientWrapper>
        <Header></Header>
        <main>
          {children}
        </main>
        <Footer></Footer>
      </ClientWrapper>
    </body>
    </html>
  );
}
