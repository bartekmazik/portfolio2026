/**
 * SEO Utilities
 * Helper functions for SEO-related operations
 */

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bartlomiej-mazik.com";

export interface MetadataConfig {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "profile";
}

/**
 * Generate canonical URL
 */
export function generateCanonical(path?: string): string {
  if (!path) return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Generate OpenGraph image URL
 */
export function generateOgImage(imagePath: string): string {
  return `${SITE_URL}${imagePath.startsWith("/") ? imagePath : `/${imagePath}`}`;
}

/**
 * Slugify text for URLs
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/**
 * Structured data helpers
 */
export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bartłomiej Mazik",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      "https://github.com/bartlomiej",
      "https://linkedin.com/in/bartlomiej",
      "https://twitter.com/bartlomiejmazik",
    ],
  },

  person: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bartłomiej Mazik",
    url: SITE_URL,
    jobTitle: "Full-Stack Developer & SEO Specialist",
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Nest.js",
      "SEO",
      "Web Development",
    ],
  },
};

/**
 * Get social media metadata
 */
export const socialLinks = {
  github: "https://github.com/bartlomiej",
  linkedin: "https://linkedin.com/in/bartlomiej",
  twitter: "https://twitter.com/bartlomiejmazik",
  email: "contact@bartlomiej-mazik.com",
};

/**
 * Performance and SEO best practices
 */
export const performanceHints = {
  // Preload critical resources
  preload: [
    { href: "/fonts/noto-serif.woff2", as: "font", type: "font/woff2" },
    { href: "/fonts/inter.woff2", as: "font", type: "font/woff2" },
  ],

  // DNS prefetch for external services
  dnsPrefetch: [
    "https://www.googletagmanager.com",
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
  ],

  // Preconnect for faster external resource loading
  preconnect: [
    { href: "https://fonts.googleapis.com" },
    { href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  ],
};
