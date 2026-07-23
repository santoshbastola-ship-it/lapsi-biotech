import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";

import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lapsibiotech.com.np"),
  title: {
    default: "Lapsi BioTech | Premium Organic Snacks & Biotech Produce",
    template: "%s | Lapsi BioTech",
  },
  description: "Lapsi BioTech - Experience premium quality, organically processed Spondias pinnata (Lapsi) treats, sweet and sour candies, titaura, and sustainable agricultural innovations from Nepal.",
  keywords: ["Lapsi BioTech", "Lapsi candy", "titaura", "organic snacks", "Nepalese titaura", "sustainable agriculture", "biotech food", "Nepal local produce"],
  authors: [{ name: "Lapsi BioTech" }],
  creator: "Lapsi BioTech",
  publisher: "Lapsi BioTech",
  applicationName: "Lapsi BioTech",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "LapsiBioTech",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lapsibiotech.com.np",
    title: "Lapsi BioTech | Premium Organic Snacks & Biotech Produce",
    description: "Experience premium quality, organically processed Spondias pinnata (Lapsi) treats, sweet and sour candies, and sustainable local produce from Nepal.",
    siteName: "Lapsi BioTech",
    images: [
      {
        url: "/icons/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "Lapsi BioTech Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lapsi BioTech",
    description: "Premium organic snacks, Lapsi treats, and sustainable agricultural innovations.",
    images: ["/icons/icon-512x512.png"],
  },
  alternates: {
    canonical: "/",
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
  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#2D5A27",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

import { PWAInstallPrompt } from "@/components/PWAInstallPrompt";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased min-h-screen flex flex-col bg-gray-50`}
      >
        <PWAInstallPrompt />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
