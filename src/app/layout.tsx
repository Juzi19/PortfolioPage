import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import ClientWrapper from "@/components/ClientWrapper";


export const metadata: Metadata = {
  title: "Justus Zimmermann - Web developer",
  description: "Web developer, ready to face new, exciting challenges",
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
      <ClientWrapper>
        <body>
        <Header></Header>
        <main>
          {children}
        </main>
        <Footer></Footer>
        </body>
      </ClientWrapper>
      
    </html>
  );
}
