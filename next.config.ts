import type { NextConfig } from "next";

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  cacheComponents: true,
  compress: false,
  poweredByHeader: false,
  reactCompiler: true,
  trailingSlash: true,
  experimental: {
    serverMinification: false,
  },
};

export default nextConfig;
initOpenNextCloudflareForDev();
