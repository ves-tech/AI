// Injects a self-contained nav bar into the standalone Da-M-I-C-Us tools in
// public/. These files are served verbatim by Astro and are also meant to work
// offline as single files, so the nav is inlined per file rather than loaded
// from the site.
//
// NOTE: this duplicates navigation that otherwise lives in
// src/components/Nav.astro. If you add or rename a tool, update TOOLS below
// and re-run:  node scripts/add-app-nav.mjs
//
// Re-running is safe: existing injected markup is replaced, not stacked.

import { readFileSync, writeFileSync } from 'node:fs';

const ROOT = 'public/Da-M-I-C-Us';

// key -> path relative to the Da-M-I-C-Us folder
const TOOLS = [
  { key: 'classifier', label: 'Classifier', path: 'classifier/damicus-v2_classifier_r4.html' },
  { key: 'policy', label: 'Policy Maker', path: 'classifier/damicus-v2_policymaker_r10.html' },
  { key: 'compare', label: 'Compare', path: 'classifier/index.html' },
  { key: 'onepage', label: 'One-page sheet', path: 'one-page/Da-M-I-C-Us Summary (standalone).html' },
];

const START = '<!-- ves-appnav:start -->';
const END = '<!-- ves-appnav:end -->';

// Literal colours on purpose: these files each define --ink/--txt/--rule, and
// --ink is the *background* in the Compare shell but the *text* colour in the
// classifier and policy maker. Reusing their variables would invert the bar.
const CSS = `
.ves-appnav{position:sticky;top:0;z-index:99999;display:flex;align-items:center;
  gap:18px;flex-wrap:wrap;padding:9px 16px;background:#1C1C1F;
  border-bottom:1px solid #3A3A40;font:14px/1.4 -apple-system,BlinkMacSystemFont,
  "Segoe UI",Roboto,Helvetica,Arial,sans-serif;box-sizing:border-box}
.ves-appnav a{color:#A9A9AF;text-decoration:none;white-space:nowrap}
.ves-appnav a:hover{color:#F2F2F4}
.ves-appnav a:focus-visible{outline:2px solid #E8A33D;outline-offset:2px}
.ves-appnav a[aria-current="page"]{color:#E8A33D}
.ves-appnav .ves-appnav-home{color:#F2F2F4;font-weight:500}
.ves-appnav .ves-appnav-sep{width:1px;height:16px;background:#3A3A40}
@media print{.ves-appnav{display:none}}
`.trim();

// Relative path from one tool's folder to another's file.
const rel = (fromPath, toPath) => {
  const fromDir = fromPath.split('/').slice(0, -1).join('/');
  const toDir = toPath.split('/').slice(0, -1).join('/');
  if (fromDir === toDir) return toPath.split('/').pop();
  return `${'../'.repeat(fromDir.split('/').length)}${toPath}`;
};

const buildNav = (current) => {
  const self = TOOLS.find((t) => t.key === current);
  const up = '../'.repeat(self.path.split('/').length - 1) + '../';
  const links = TOOLS.map((t) => {
    const href = t.key === current ? '' : ` href="${rel(self.path, t.path)}"`;
    const cur = t.key === current ? ' aria-current="page"' : '';
    return t.key === current
      ? `    <a${cur}>${t.label}</a>`
      : `    <a${href}>${t.label}</a>`;
  }).join('\n');

  return `${START}
<style>${CSS}</style>
<nav class="ves-appnav" aria-label="Da-M-I-C-Us tools">
    <a class="ves-appnav-home" href="${up}">&lsaquo; VES AI</a>
    <span class="ves-appnav-sep"></span>
${links}
</nav>
${END}`;
};

for (const tool of TOOLS) {
  const file = `${ROOT}/${tool.path}`;
  let html = readFileSync(file, 'utf8');

  // Idempotent: strip any previously injected block first.
  const existing = new RegExp(`${START}[\\s\\S]*?${END}\\n?`, 'g');
  html = html.replace(existing, '');

  const nav = buildNav(tool.key);

  if (tool.key === 'onepage') {
    // This file is a self-extracting bundle: its unpacker calls
    // document.documentElement.replaceWith(), which destroys anything sitting
    // in <body>. Re-attach the bar after rehydration instead. Observing
    // `document` works because the document object itself survives the swap.
    // The swap replaces <html> wholesale, so the stylesheet has to be
    // re-injected alongside the markup — not just written once into <head>.
    const navOnly = nav
      .replace(START, '')
      .replace(END, '')
      .replace(/<style>[\s\S]*?<\/style>/, '')
      .trim();
    const cssFixed = `${CSS}\n.ves-appnav{position:fixed;left:0;right:0;top:0}\nbody{padding-top:46px}`;

    const script = `${START}
<script>
(function () {
  var CSS = ${JSON.stringify(cssFixed)};
  var HTML = ${JSON.stringify(navOnly)};
  function mount() {
    var head = document.head || document.documentElement;
    if (head && !document.getElementById('ves-appnav-style')) {
      var st = document.createElement('style');
      st.id = 'ves-appnav-style';
      st.textContent = CSS;
      head.appendChild(st);
    }
    if (!document.body || document.querySelector('.ves-appnav')) return;
    var d = document.createElement('div');
    d.innerHTML = HTML;
    document.body.insertBefore(d.firstElementChild, document.body.firstChild);
  }
  mount();
  // The bundle swaps documentElement asynchronously; re-mount when it does.
  new MutationObserver(mount).observe(document, { childList: true, subtree: true });
})();
<\/script>
${END}`;
    // Put it last so it runs after the unpacker is defined.
    html = html.replace(/<\/body>/i, `${script}\n</body>`);
  } else {
    html = html.replace(/(<body[^>]*>)/i, `$1\n${nav}`);
  }

  writeFileSync(file, html);
  console.log(`nav -> ${file}`);
}
