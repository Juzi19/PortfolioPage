import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import ClientWrapper from "@/components/ClientWrapper";
import Script from "next/script";


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
        <Script
          id="trackboxx"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, s, id, w, f){
                  w[f] = w[f] || function() {
                      (w[f].q = w[f].q || []).push(arguments)
                  };
                  var js, fjs = d.getElementsByTagName(s)[0];
                  if (d.getElementById(id)){ return; }
                  js = d.createElement(s); js.id = id;
                  js.async = true;
                  js.src = "https://cdn.trackboxx.info/p/tracker.js";
                  js.onload = function(){
                      // Trackboxx Script ist geladen – initialisieren
                      if (w[f]) {
                          w[f]('set', 'siteId', ${process.env.SITE_ID!});
                          w[f]('trackPageview');
                      }
                  };
                  fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'trackboxx-script', window, 'trackboxx'));
            `,
          }}
        />

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
