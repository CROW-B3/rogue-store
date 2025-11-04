import type { NextConfig } from "next";

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  compress: false,
  poweredByHeader: false,
  trailingSlash: true,
  experimental: {
    serverMinification: false,
  },
};

export default nextConfig;
initOpenNextCloudflareForDev();
