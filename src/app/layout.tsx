import type { Metadata } from "next";
import { Fraunces, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alif Maulana Rizqi — Mobile Engineer",
  description:
    "Mobile & back-end engineer building applications with care, curiosity, and clean architecture. Flutter · Bloc · Kotlin · Lumen.",
  keywords: [
    "Alif Maulana Rizqi",
    "Mobile Engineer",
    "Flutter Developer",
    "Bloc",
    "Indonesia",
    "Indramayu",
    "Portfolio",
  ],
  authors: [{ name: "Alif Maulana Rizqi" }],
  openGraph: {
    title: "Alif Maulana Rizqi — Mobile Engineer",
    description:
      "Mobile & back-end engineer building applications with care, curiosity, and clean architecture.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geist.variable} ${jetbrains.variable}`}
    >
      <body className="grain bg-bone text-ink antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
