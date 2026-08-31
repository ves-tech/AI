// astro.config.mjs sets `base: '/AI'` (no trailing slash), so
// import.meta.env.BASE_URL is '/AI' in production and '/' in dev.
// Concatenating a path straight onto it yields '/AIabout/' rather than
// '/AI/about/', so always build URLs through withBase().
const raw = import.meta.env.BASE_URL;
export const base = raw.endsWith('/') ? raw : `${raw}/`;

/** Prefix a site-root-relative path with the deployment base. */
export const withBase = (path: string): string =>
  `${base}${path.replace(/^\//, '')}`;
