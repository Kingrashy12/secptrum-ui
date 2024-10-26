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
  webpack(config, { isServer }) {
    // Add custom rule for video files
    config.module.rules.push({
      test: /\.(mp4|mov|wmv|avi|mkv|flv)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]", // Customize output file name
          outputPath: "assets/videos/",
          publicPath: "/assets/videos/",
        },
      },
    });

    return config;
  },
};

export default nextConfig;
