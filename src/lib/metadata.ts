import type { Metadata } from "next";
import { SITE_URL } from "./seo";

/**
 * Metadata generator for consistent page metadata
 * Use this to create metadata for different pages
 */

interface PageMetadataConfig {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "profile";
  author?: string;
  publishedDate?: Date;
  updatedDate?: Date;
  keywords?: string[];
  index?: boolean;
}

export function generatePageMetadata(
  config: PageMetadataConfig
): Metadata {
  const {
    title = "Bartłomiej Mazik",
    description = "Full-stack developer specializing in Next.js, Nest.js, and SEO optimization",
    canonical = SITE_URL,
    ogImage = `${SITE_URL}/og-image.jpg`,
    ogType = "website",
    author = "Bartłomiej Mazik",
    publishedDate,
    updatedDate,
    keywords = [],
    index = true,
  } = config;

  return {
    title,
    description,
    keywords,
    authors: author ? [{ name: author }] : undefined,
    creator: author,
    publisher: author,
    
    robots: {
      index,
      follow: true,
      nocache: false,
      googleBot: {
        index,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },

    alternates: {
      canonical,
    },

    openGraph: {
      type: ogType,
      locale: "en_US",
      url: canonical,
      siteName: "Bartłomiej Mazik",
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
          type: "image/jpeg",
        },
      ],
      ...(publishedDate && {
        publishedTime: publishedDate.toISOString(),
      }),
      ...(updatedDate && {
        modifiedTime: updatedDate.toISOString(),
      }),
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@bartlomiejmazik",
    },
  };
}

/**
 * Metadata for blog posts
 */
export function generateArticleMetadata(
  config: PageMetadataConfig & {
    author?: string;
    publishedDate: Date;
    updatedDate?: Date;
    tags?: string[];
  }
): Metadata {
  return generatePageMetadata({
    ...config,
    ogType: "article",
    keywords: [
      ...(config.keywords || []),
      ...(config.tags || []),
    ],
  });
}

/**
 * Metadata for project pages
 */
export function generateProjectMetadata(
  config: PageMetadataConfig & {
    technologies?: string[];
    demoUrl?: string;
    repositoryUrl?: string;
  }
): Metadata {
  return generatePageMetadata({
    ...config,
    keywords: [
      ...(config.keywords || []),
      ...(config.technologies || []),
    ],
  });
}
