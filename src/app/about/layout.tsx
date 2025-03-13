import { Metadata } from "next";

export const metadata:Metadata = {
    title: "Justus Zimmermann - About",
    description: "Learn more about my person and my skills",
}

export default function AboutLayout({
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