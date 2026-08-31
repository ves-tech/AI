# VES AI

Area devoted to AI projects of the VES Technology Committee.
Built with [Astro](https://astro.build) → static output → deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321/AI/
```

## How it's structured

- **`src/layouts/BaseLayout.astro`** — wraps every page in the shared nav/footer.
- **`src/components/Nav.astro`** — the single place the navigation scheme is defined.
  Edit the `links` array here to add/remove nav items site-wide.
- **`src/components/islands/`** — interactive (JS-hydrated) components, e.g.
  `DamicusExplorer.jsx`. Everything else on the site ships zero JS.
- **`src/content/docs/`** — markdown pages, including ones synced from Google Docs.
- **`src/lib/base.ts`** — `withBase()`. `astro.config.mjs` sets `base: '/AI'` with
  no trailing slash, so building URLs by concatenating `import.meta.env.BASE_URL`
  yields `/AIabout/`. Always route internal links and asset paths through
  `withBase()` instead.
- **`public/Da-M-I-C-Us/`** — the working group's standalone prototypes (classifier,
  policy maker, compare shell), the one-page summary and the icon set. These are
  self-contained offline HTML files served verbatim, deliberately kept at their
  original paths so existing links to `.../AI/Da-M-I-C-Us/...` keep resolving.
- **`scripts/fetch-gdocs.mjs`** — pulls specified Google Docs as HTML, converts to
  markdown, and writes them into `src/content/docs/`. Runs automatically before
  every build (`prebuild` npm script). Add more docs to the `DOCS` array in that
  file as needed. Docs must be shared as "Anyone with the link can view".

## Deployment

Push to `main` → `.github/workflows/deploy.yml` builds (including the Google
Docs sync) and deploys `dist/` to GitHub Pages automatically.

**One-time repo setting:** Settings → Pages → Source → "GitHub Actions"
(instead of "Deploy from a branch").

## Adding a page

1. Add a `.astro` file under `src/pages/` (or a markdown file under
   `src/content/docs/` for content-heavy pages).
2. Wrap it in `<BaseLayout title="...">...</BaseLayout>`.
3. Add it to the `links` array in `src/components/Nav.astro` if it should
   appear in the nav.
