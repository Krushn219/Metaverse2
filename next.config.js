/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: "imgix",
    path: "",
  },
  basePath: "/Metaverse2",
  assetPrefix: "/Metaverse2",
};

module.exports = nextConfig;
