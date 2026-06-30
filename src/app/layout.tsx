import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Pelumi Fadahunsi --- FullStack Developer",
  description:
    "I build modern, scalable web applications and digital experiences that bring ideas to life.",
  keywords: [
    "Full-Stack Developer",
    "Web Developer",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Software Engineer",
    "SaaS",
    "Web3",
    "AI",
    "Portfolio",
    "Branding",
    "Programming",
    "Nigeria Developer",
    "Freelancer",
  ],
  authors: [{ name: "Pelumi Fadahunsi" }],
  openGraph: {
    title: "Pelumi Fadahunsi --- FullStack Developer",
    description:
      "I build modern, scalable web applications and digital experiences that bring ideas to life.",
    type: "website",
    locale: "en_US",
    siteName: "Pelumi Fadahunsi Portfolio",
    url: "https://yourdomain.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pelumi Fadahunsi --- FullStack Developer",
    description:
      "I build modern, scalable web applications and digital experiences that bring ideas to life.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd
          type="Person"
          name="Pelumi Fadahunsi"
          description="Full-Stack Developer building modern, scalable web applications"
          url="https://yourdomain.com"
        />
      </head>
      <body className="max-w-screen bg-primary text-text-color overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
