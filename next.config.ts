import type { NextConfig } from "next";

// Showdown, the MLB Showdown card game, is its own Vercel project. It's built
// under /showdown/, so these pass the same paths straight through.
const SHOWDOWN = "https://showdown-2000.vercel.app";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async rewrites() {
    return [
      { source: "/showdown", destination: `${SHOWDOWN}/showdown/` },
      { source: "/showdown/:path*", destination: `${SHOWDOWN}/showdown/:path*` },
    ];
  },
};

export default nextConfig;
