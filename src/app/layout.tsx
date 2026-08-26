import type { Metadata, Viewport } from "next";
import { Syne, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});
const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
  display: "swap",
});
const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jbmono",
  display: "swap",
});

const SITE = "https://www.harshjannawar.com";
const DESC =
  "Harsh Jannawar is a security engineer working on application and AI security — building the guardrails between AI agents and the damage they can do.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Harsh Jannawar — Security Engineer",
  description: DESC,
  keywords: [
    "Harsh Jannawar", "Security Engineer", "Application Security",
    "AI Security", "LLM Security", "Penetration Testing", "Cloud Security",
  ],
  authors: [{ name: "Harsh Jannawar", url: SITE }],
  alternates: { canonical: SITE },
  openGraph: {
    title: "Harsh Jannawar — Security Engineer",
    description: DESC,
    url: SITE,
    siteName: "Harsh Jannawar",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: "Harsh Jannawar — Security Engineer", description: DESC },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#E4E3DD",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${instrument.variable} ${jbmono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
