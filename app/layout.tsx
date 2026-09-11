import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Serif_Display, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const serif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const SITE_URL = "https://hiruu.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hiruu — IT & Network Engineer Portfolio",
    template: "%s | Hiruu",
  },
  description:
    "Portfolio of Hylman — an IT and Network Engineer from Bandung, Indonesia who turns tangled infrastructure into dependable, understandable experiences. Fiber optic, MikroTik, Linux, and photography.",
  applicationName: "Hiruu Portfolio",
  authors: [{ name: "Hylman", url: "https://github.com/hylxzzh" }],
  keywords: [
    "IT engineer",
    "network engineer",
    "fiber optic",
    "MikroTik",
    "Linux",
    "photographer",
    "drone",
    "designer",
    "Bandung",
    "Indonesia",
    "LKS",
  ],
  category: "portfolio",
  openGraph: {
    title: "Hiruu — IT & Network Engineer",
    description:
      "Human systems. Clear signals. Portfolio of an IT & Network Engineer from Bandung, Indonesia.",
    url: SITE_URL,
    siteName: "Hiruu",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/foto_profile/profile1.jpg",
        width: 1200,
        height: 1500,
        alt: "Hylman — Hiruu portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiruu — IT & Network Engineer",
    description:
      "Human systems. Clear signals. Portfolio of an IT & Network Engineer from Bandung, Indonesia.",
    images: ["/foto_profile/profile1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${space.variable} ${serif.variable} ${mono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}