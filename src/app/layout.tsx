import type { Metadata } from "next";
import { Noto_Serif, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";

const notoFont = Noto_Serif({
  variable: "--font-noto",
  subsets: ["latin"],
});

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bartłomiej Mazik",
  description: "SEO | Next.js | Nest.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoFont.variable} ${interFont.variable} antialiased `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
