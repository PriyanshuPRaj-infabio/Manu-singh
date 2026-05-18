import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import AnimationProvider from "@/components/providers/AnimationProvider";
import CustomCursor from "@/components/providers/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const cursiveBody = Cormorant_Garamond({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const greatVibes = Great_Vibes({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Manu Singh – Luxury Experiential Travel Specialist | India Personal Tours",
  description:
    "Discover the real India with Manu Singh. 23+ years of expertise in luxury experiential travel, authentic cultural experiences, and personalized journeys through Rajasthan and beyond.",
  keywords: [
    "India experiential travel",
    "Rajasthan tours",
    "private India tours",
    "authentic India travel experiences",
    "luxury India tours",
    "cultural tourism India",
    "Manu Singh",
    "India Personal Tours",
    "heritage tours India",
    "cultural immersion India",
    "bespoke India travel",
    "India travel specialist",
  ],
  authors: [{ name: "Manu Singh" }],
  creator: "Manu Singh",
  publisher: "India Personal Tours",
  metadataBase: new URL("https://www.indiapersonaltours.com"),
  openGraph: {
    title: "Manu Singh – Luxury Experiential Travel Specialist",
    description:
      "Discover the real India with Manu Singh. 23+ years of expertise in luxury experiential travel and authentic cultural experiences.",
    url: "https://www.indiapersonaltours.com",
    siteName: "India Personal Tours",
    images: [
      {
        url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Rajasthan Desert - India Personal Tours",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manu Singh – Luxury Experiential Travel Specialist",
    description:
      "Discover the real India with Manu Singh. 23+ years of expertise in luxury experiential travel and authentic cultural experiences.",
    images: ["https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${cursiveBody.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScroll />
        <AnimationProvider>
          {/* Custom cursor — replaces CursorGlow */}
          <CustomCursor />
          {/* Scroll progress bar */}
          <ScrollProgress />
          {children}
        </AnimationProvider>
      </body>
    </html>
  );
}
