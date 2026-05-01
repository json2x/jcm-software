import type { Metadata } from "next";
import { Manrope, Inter, Nunito } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JCM Software - Independent Full-Stack Developer",
  description:
    "I help founders, startups, and small businesses turn ideas into fast, scalable web applications. From concept to launch, you work directly with the developer building your product.",
  openGraph: {
    title: "JCM Software - Independent Full-Stack Developer",
    description:
      "From Idea to Production — Without the Overhead. End-to-end full-stack development with architectural precision.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} ${nunito.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
