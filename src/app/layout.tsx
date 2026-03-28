import type { Metadata } from "next";
import { Noto_Serif, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { GoogleAnalytics } from "@/components/analytics/gtag";
import { PersonJsonLd } from "@/components/analytics/json-ld";

const notoFont = Noto_Serif({
  variable: "--font-noto",
  subsets: ["latin"],
});

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bartlomiej-mazik.com";
const AUTHOR_NAME = "Bartłomiej Mazik";

export const metadata: Metadata = {
  title: {
    default: `${AUTHOR_NAME} | Full-Stack Developer & SEO Specialist`,
    template: `%s | ${AUTHOR_NAME}`,
  },
  description:
    "Full-stack developer specializing in Next.js, Nest.js, and SEO optimization. Building scalable web applications with modern technologies.",
  keywords: [
    "Full-stack developer",
    "Next.js",
    "Nest.js",
    "SEO optimization",
    "React",
    "TypeScript",
    "Web development",
  ],
  authors: [{ name: AUTHOR_NAME }],
  creator: AUTHOR_NAME,
  publisher: AUTHOR_NAME,
  formatDetection: {
    email: false,
    telephone: false,
  },

  // OpenGraph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: `${AUTHOR_NAME}'s Portfolio`,
    title: `${AUTHOR_NAME} | Full-Stack Developer & SEO Specialist`,
    description:
      "Full-stack developer specializing in Next.js, Nest.js, and SEO optimization. Building scalable web applications with modern technologies.",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${AUTHOR_NAME}`,
        type: "image/jpeg",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: `${AUTHOR_NAME} | Full-Stack Developer & SEO Specialist`,
    description:
      "Full-stack developer specializing in Next.js, Nest.js, and SEO optimization. Building scalable web applications with modern technologies.",
    images: [`${SITE_URL}/og-image.jpg`],
    creator: "@bartlomiejmazik",
  },

  // Verification and alternate languages
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
  alternates: {
    canonical: SITE_URL,
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Analytics and Tracking */}
        <GoogleAnalytics />

        {/* JSON-LD Schema Markup */}
        <PersonJsonLd
          name={AUTHOR_NAME}
          url={SITE_URL}
          image={`${SITE_URL}/avatar.jpg`}
          jobTitle="Full-Stack Developer & SEO Specialist"
          knowsAbout={[
            "Next.js",
            "Nest.js",
            "React",
            "TypeScript",
            "SEO Optimization",
            "Web Development",
          ]}
          sameAs={[
            "https://github.com/bartlomiej",
            "https://linkedin.com/in/bartlomiej",
            "https://twitter.com/bartlomiejmazik",
          ]}
        />

        {/* Favicon and web app manifest */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Viewport and charset */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body
        style={{ backgroundImage: 'url("/bg.jpg")' }}
        className={`${notoFont.variable} ${interFont.variable} antialiased flex flex-col items-center w-full overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
