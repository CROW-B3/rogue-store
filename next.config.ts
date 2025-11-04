import type { NextConfig } from 'next';

import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

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

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();
