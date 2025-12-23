import type { NextConfig } from "next";

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const isDockerBuild = process.env.DOCKER_BUILD === "true";

const nextConfig: NextConfig = {
  ...(isDockerBuild && { output: "standalone" }),
  compress: false,
  poweredByHeader: false,
  trailingSlash: true,
  // Transpile the local SDK and its dependencies
  transpilePackages: ["@b3-crow/website-hook-sdk", "html2canvas-pro", "ky"],
  experimental: {
    serverMinification: false,
    // Enable proper ESM handling
    esmExternals: "loose",
  },
  // Configure webpack for proper module resolution
  webpack: (config, { isServer }) => {
    // Handle ESM packages properly
    config.resolve = {
      ...config.resolve,
      extensionAlias: {
        ".js": [".ts", ".tsx", ".js", ".jsx"],
        ".mjs": [".mts", ".mjs"],
      },
    };

    // Ensure html2canvas-pro can be imported properly
    config.module.rules.push({
      test: /node_modules[\/\\](html2canvas-pro|ky)[\/\\]/,
      resolve: {
        fullySpecified: false,
      },
    });

    return config;
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

if (!isDockerBuild) {
  initOpenNextCloudflareForDev();
}
