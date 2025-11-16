import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlowingTrail } from "@/components/glowing-trail";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmad Alhukail - Portfolio",
  description: "IT Student & AI-Driven Developer passionate about building intelligent solutions through AI-assisted development and innovation",
  keywords: ["Ahmad Alhukail", "Portfolio", "AI Developer", "React", "Next.js", "Flutter"],
  authors: [{ name: "Ahmad Alhukail" }],
  openGraph: {
    title: "Ahmad Alhukail - Portfolio",
    description: "IT Student & AI-Driven Developer passionate about building intelligent solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={inter.className}>
        <GlowingTrail />
        {children}
      </body>
    </html>
  );
}
