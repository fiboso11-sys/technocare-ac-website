import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "technocareac.com" }],
        destination: "https://www.technocareac.com/:path*",
        permanent: true,
      },
      {
        source: "/services/ac-sales-supply",
        destination: "/services/ac-sales",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
