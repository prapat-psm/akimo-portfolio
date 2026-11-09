import { defineCloudflareConfig } from '@opennextjs/cloudflare';

// Phase 1 is fully static, so no incremental cache (R2) is needed: it keeps the
// Cloudflare account free of paid-plan setup. Add r2IncrementalCache in phase 2 if ISR is used.
export default defineCloudflareConfig({});
