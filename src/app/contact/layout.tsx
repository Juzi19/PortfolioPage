import { Metadata } from "next";

export const metadata:Metadata = {
    title: "Justus Zimmermann - Contact",
    description: "Get in touch with me by linkedin, github or the contact form",
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