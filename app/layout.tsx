import type { Metadata } from "next";
import { Inter, Monsieur_La_Doulaise } from "next/font/google";
import "./globals.css";

// 1. Load Font Inter (untuk teks umum & body)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// 2. Load Font Monsieur La Doulaise (untuk aksen & signature)
const cursive = Monsieur_La_Doulaise({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cursive",
});

export const metadata: Metadata = {
  title: "Hiruu - Portfolio",
  description: "IT & Network Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cursive.variable} font-sans bg-[#080807] text-amber-50/80 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}