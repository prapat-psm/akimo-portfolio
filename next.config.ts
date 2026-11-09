import type { NextConfig } from 'next';
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

const nextConfig: NextConfig = {
  // cacheComponents / partialPrefetching are off on purpose: on the Workers runtime
  // (OpenNext 1.20) the prerendered page hung with a 500 in `wrangler dev`.
  // Phase 1 pages are static either way. Re-test before turning them on.

  // Gallery images are pre-resized web copies in public/gallery, served as static
  // assets. This skips Cloudflare Images, which needs extra setup.
  images: { unoptimized: true },
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
};

export default nextConfig;

// Lets `next dev` read Cloudflare bindings (none yet in phase 1).
initOpenNextCloudflareForDev();
