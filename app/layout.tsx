import type { Metadata } from "next";
import {
  Raleway,
  Wix_Madefor_Display,
  Wix_Madefor_Text,
  Tiro_Devanagari_Hindi,
  Noto_Naskh_Arabic,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import SplashScreen from "@/components/splash-screen";

const title = Raleway({
  subsets: ["latin"],
  variable: "--font-title",
  weight: ["600", "700"],
});

const heading = Wix_Madefor_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});

const text = Wix_Madefor_Text({
  subsets: ["latin"],
  variable: "--font-text",
  weight: ["400", "500"],
});

const hindi = Tiro_Devanagari_Hindi({
  subsets: ["devanagari", "latin"],
  variable: "--font-hindi",
  weight: ["400"],
});

const arabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["400", "700"],
});

const highlight = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-highlight",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SPM Dubai — Recovery Solutions for the GCC",
  description:
    "We build the infrastructure that allows your team to focus on what matters most.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${title.variable} ${heading.variable} ${text.variable} ${hindi.variable} ${arabic.variable} ${highlight.variable} bg-light-100 text-dark-900 antialiased`}
      >
        <SplashScreen />
        <Nav />
        {children}
      </body>
    </html>
  );
}