/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheMaxMemorySize: 0,
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
};

export default nextConfig;
