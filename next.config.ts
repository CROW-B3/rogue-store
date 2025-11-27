import type { NextConfig } from "next";

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  ...(process.env.DOCKER_BUILD === "true" && { output: "standalone" }),
  compress: false,
  poweredByHeader: false,
  trailingSlash: true,
  experimental: {
    serverMinification: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "9cndgv3upu.ufs.sh",
      },
    ],
  },
};

export default nextConfig;

if (process.env.DOCKER_BUILD !== "true") {
  initOpenNextCloudflareForDev();
}
