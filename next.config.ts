import type { NextConfig } from "next";

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const isDockerBuild = process.env.DOCKER_BUILD === "true";

const nextConfig: NextConfig = {
  ...(isDockerBuild && { output: "standalone" }),
  compress: false,
  poweredByHeader: false,
  trailingSlash: true,
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

if (!isDockerBuild) {
  initOpenNextCloudflareForDev();
}
