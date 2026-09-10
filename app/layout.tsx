import type { Metadata } from "next";
import { Space_Grotesk, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

// Font Monsieur La Doulaise
const serif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
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
        className={`${space.variable} ${serif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}