import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import GrainDotGrid from "@/components/GrainDotGrid";

import MeshGradientBackground from "@/components/MeshGradientBackground";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0d0800',
};

export const metadata: Metadata = {
  title: "The Graine Ledger | The First NFT-Mediated Crypto Distillery",
  description: "Own the spirit of innovation. The Graine Ledger uses NFTs as secure, immutable deeds to physical casks of fine whiskey. Investors hold creative control over the mashbill, char levels, and aging process.",
  keywords: ["The Graine Ledger", "Crypto Distillery", "Whiskey NFT", "Asset Backed NFT", "Cask Ownership", "Fine Spirits", "Real World Assets", "RWA", "NFT Investing", "Digital Deeds", "Whiskey Investment", "Barrel Ownership"],
  openGraph: {
    title: "The Graine Ledger | Liquid Assets",
    description: "Own the spirit of innovation. Invest in physical whiskey casks through digital deeds (NFTs) at the world's first crypto distillery.",
    url: "https://thegraineledger.com",
    siteName: "The Graine Ledger",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Graine Ledger | Crypto Distillery",
    description: "Tokenizing fine spirits. Own physical whiskey casks through secure NFT deeds.",
    creator: "@graineledger",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white min-h-screen relative`}
      >
        <MeshGradientBackground />
        <div className="relative z-10 w-full flex flex-col">
          {children}
        </div>
        <GrainDotGrid />
      </body>
    </html>
  );
}
