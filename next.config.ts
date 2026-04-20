import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [16, 20, 32, 48, 64, 96, 128, 240, 348, 696],
    remotePatterns: [
      { protocol: "https", hostname: "framerusercontent.com", pathname: "/images/**" },
    ],
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "@hugeicons/react"],
  },
};

export default nextConfig;
