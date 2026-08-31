// Runs as `prebuild` (see package.json). Pulls the published/shared
// Google Doc as HTML and converts it to a markdown file inside the
// `docs` content collection, so it's just another page to Astro.
//
// Requires the doc to be shared as "Anyone with the link can view".
// For private docs, swap this for the Google Docs API with a service
// account instead of the public export URL.
//
// Google Docs' HTML export is awkward in three specific ways, each handled
// below — see resolveFormatting(), and the turndown.keep() calls:
//   1. It emits NO semantic tags. Bold/italic/colour live only in CSS
//      classes (.c9{font-weight:700}), so dropping the stylesheet silently
//      drops all formatting.
//   2. Image crops are a fixed-size overflow:hidden <span> wrapping the FULL
//      image, offset by negative margins — all inline. Turndown's default
//      image rule keeps only the src, silently undoing every crop.
//   3. Tables have no <thead>/<th> and their cells contain images and
//      headings, so they can't become GFM pipe tables.

import { writeFileSync, mkdirSync } from 'node:fs';
import TurndownService from 'turndown';
import domino from '@mixmark-io/domino';

const DOCS = [
  {
    id: '1UgIfWKZOpVCDFoNGQE-uYR9_gIEDzRESEkAuGw0gh0k',
    outFile: './src/content/docs/damicus-overview.md',
    title: 'Da-M-I-C-Us Overview',
    // The doc holds the current draft followed by a superseded one, separated
    // by a paragraph reading exactly "DRAFT1". Everything from that marker on
    // is an older revision using an obsolete code scheme (SAAS/CW-), so it is
    // dropped at sync rather than published. Nothing is changed in the Google
    // Doc itself. Set to null to publish the whole document.
    truncateAt: 'DRAFT1',
  },
  // Add more { id, outFile, title } entries here as needed.
];

/** Build a map of `className -> { prop: value }` from the export's stylesheet. */
function parseClassStyles(html) {
  const css = (html.match(/<style[^>]*>([\s\S]*?)<\/style>/) || [])[1] || '';
  const map = new Map();
  for (const m of css.matchAll(/\.([\w-]+)\s*\{([^}]*)\}/g)) {
    const decls = {};
    for (const d of m[2].split(';')) {
      const i = d.indexOf(':');
      if (i === -1) continue;
      decls[d.slice(0, i).trim().toLowerCase()] = d.slice(i + 1).trim();
    }
    map.set(m[1], { ...(map.get(m[1]) || {}), ...decls });
  }
  return map;
}

/**
 * Turn class-based formatting into real markup, so it survives conversion.
 * Bold/italic/underline become semantic tags; colour becomes an inline style.
 * Everything else in the stylesheet is page-layout chrome we don't want.
 */
function resolveFormatting(doc, classStyles) {
  for (const el of [...doc.querySelectorAll('[class]')]) {
    const decls = {};
    for (const cls of el.getAttribute('class').split(/\s+/)) {
      Object.assign(decls, classStyles.get(cls) || {});
    }

    const weight = decls['font-weight'];
    const bold = weight === 'bold' || parseInt(weight, 10) >= 600;
    const italic = decls['font-style'] === 'italic';
    const underline = (decls['text-decoration'] || '').includes('underline');
    const colour = decls['color'];

    // Colour rides on the element itself; the doc is rendered on a paper
    // surface, so its authored-for-white palette is correct as written.
    // Background comes too: the doc uses white text on tinted cells, which
    // would be invisible on the paper without the tint behind it.
    const bg = decls['background-color'];
    const keepBg = bg && !['transparent', 'inherit', '#ffffff'].includes(bg.toLowerCase());
    const parts = [];
    if (colour && colour !== 'inherit') parts.push(`color:${colour}`);
    if (keepBg) parts.push(`background-color:${bg}`);
    if (parts.length) {
      const prev = el.getAttribute('style') || '';
      el.setAttribute('style', `${prev}${prev && !prev.endsWith(';') ? ';' : ''}${parts.join(';')}`);
    }

    // Wrap children rather than the element, so we don't disturb block layout.
    for (const [flag, tag] of [[bold, 'strong'], [italic, 'em'], [underline, 'u']]) {
      if (!flag || !el.firstChild) continue;
      const wrap = doc.createElement(tag);
      while (el.firstChild) wrap.appendChild(el.firstChild);
      el.appendChild(wrap);
    }
  }

  // The classes have served their purpose and reference a stylesheet we drop.
  for (const el of [...doc.querySelectorAll('[class]')]) el.removeAttribute('class');
}

/**
 * Drop the marker element and everything after it. Returns false if the
 * marker isn't present, so a renamed/removed marker is reported rather than
 * silently publishing (or silently cutting) the wrong thing.
 */
function truncateAtMarker(doc, marker) {
  const candidates = [...doc.querySelectorAll('p, h1, h2, h3, h4, h5, h6')];
  const hit = candidates.find(
    (el) => (el.textContent || '').replace(/\s+/g, ' ').trim() === marker
  );
  if (!hit) return false;

  // Walk up to the top-level block that contains the marker, then remove it
  // and every sibling that follows.
  let node = hit;
  while (node.parentNode && node.parentNode !== doc.body) node = node.parentNode;
  while (node.nextSibling) node.parentNode.removeChild(node.nextSibling);
  node.parentNode.removeChild(node);
  return true;
}

const turndown = new TurndownService({ headingStyle: 'atx' });
turndown.remove(['style', 'script', 'head', 'meta', 'link', 'title', 'noscript']);
turndown.keep(['table']);
// Keep spans that carry real information: an image crop window (overflow) or
// a colour. Plain spans are unwrapped as usual.
turndown.keep(
  (node) =>
    node.nodeName === 'IMG' ||
    (node.nodeName === 'SPAN' && (node.getAttribute?.('style') || '').trim() !== '')
);

mkdirSync('./src/content/docs', { recursive: true });

for (const doc of DOCS) {
  const exportUrl = `https://docs.google.com/document/d/${doc.id}/export?format=html`;

  try {
    const res = await fetch(exportUrl);
    if (!res.ok) {
      throw new Error(`Fetch failed with status ${res.status}`);
    }
    const html = await res.text();

    const classStyles = parseClassStyles(html);
    const window = domino.createWindow(html);
    const document = window.document;

    if (doc.truncateAt) {
      const cut = truncateAtMarker(document, doc.truncateAt);
      console.log(
        cut
          ? `  trimmed everything from the "${doc.truncateAt}" marker onward`
          : `  WARNING: marker "${doc.truncateAt}" not found — publishing the whole document. ` +
            `If the doc was restructured, update truncateAt in scripts/fetch-gdocs.mjs.`
      );
    }

    resolveFormatting(document, classStyles);

    const body = document.body ? document.body.innerHTML : html;
    const markdown = turndown.turndown(body).trim();

    const frontmatter = [
      '---',
      `title: "${doc.title}"`,
      `sourcedFrom: "https://docs.google.com/document/d/${doc.id}/edit"`,
      `lastSynced: "${new Date().toISOString()}"`,
      '---',
      '',
    ].join('\n');

    writeFileSync(doc.outFile, frontmatter + markdown);
    console.log(`Synced ${doc.title} -> ${doc.outFile}`);
  } catch (err) {
    console.warn(
      `Warning: could not sync "${doc.title}" from Google Docs (${err.message}). ` +
      `Leaving existing file at ${doc.outFile} in place.`
    );
  }
}
