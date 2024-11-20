import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "onetentenhomes.com",
        protocol: "https",
      },
      {
        hostname: "fakestoreapi.com",
        protocol: "https",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["secptrum-ui"],
  },
};

export default nextConfig;
