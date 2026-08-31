import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// This repo is served from https://ves-tech.github.io/AI/
// so `site` + `base` must match that subpath, or internal links
// and asset URLs will 404 once deployed.
export default defineConfig({
  site: 'https://ves-tech.github.io',
  base: '/AI',
  integrations: [react()],
});
