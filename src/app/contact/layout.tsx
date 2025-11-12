import { Metadata } from "next";

export const metadata:Metadata = {
    title: "Justus Zimmermann - Contact",
    description: "Get in touch with me by linkedin, github or the contact form",
    keywords: "contact,Justus, web development, Fullstack, Munich, web developer",
    robots: "index, follow"
}

export default function ContactLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
        {children}
      </div>
    );
  }