import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Strict mode for better error detection
  reactStrictMode: true,

  // Image optimization
  images: {
    unoptimized: true, // Required for static export
  },

  // Headers for security and SEO
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // Redirects for old URLs (if needed in future)
  async redirects() {
    return [];
  },
};

export default nextConfig;
