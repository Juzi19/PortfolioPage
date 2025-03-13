import { Metadata } from "next";

export const metadata:Metadata = {
    title: "Justus Zimmermann - Projects",
    description: "Get an overview of my latest projects",
}

export default function ProjectLayout({
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