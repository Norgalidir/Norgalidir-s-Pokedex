// Personal Pokédex — designed and built by GK, 2026.
// Offline support for the Pokédex. Bump VERSION after changing any file so
// phones pick up the new copy on their next online visit.
const VERSION = 'pokedex-v64';
const CORE = [
  "./",
  "./index.html",
  "./Pokedex.dc.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./support.js",
  "./pokedex-sound.js",
  "./pokedex-screen.js",
  "./pokedex-intro.js",
  "./pokedex-honours.js",
  "./pokedex-quiz.js",
  "./_ds/nocturne-7fd53eca-b1c1-42d1-a568-1ba247596b3b/styles.css",
  "./_ds/nocturne-7fd53eca-b1c1-42d1-a568-1ba247596b3b/_ds_bundle.js",
  "./pokedex-abilities.js",
  "./pokedex-forms.js",
  "./pokedex-forms-extra.js",
  "./pokedex-special-forms.js",
  "./pokedex-regional.js",
  "./pokedex-shiny-locks.js",
  "./pokedex-alpha.js",
  "./pokedex-events.js",
  "./pokedex-events-extra.js",
  "./pokedex-games.js",
  "./pokedex-moves.js",
  "./pokedex-moves-gen456.js",
  "./pokedex-moves-gen789.js",
  "./pokedex-moves-special.js",
  "./pokedex-items.js",
  "./pokedex-items-all.js",
  "./pokedex-lux-exempt.js",
  "./pokedex-egg-groups.js",
  "./pokedex-egg-moves.js",
  "./pokedex-encounters-hoenn.js",
  "./pokedex-encounters-gen34.js",
  "./pokedex-encounters-gen5.js",
  "./pokedex-encounters-gen6.js",
  "./pokedex-encounters-gen7.js",
  "./pokedex-encounters-gen8.js",
  "./pokedex-encounters-bdsp.js",
  "./pokedex-encounters-gu.js",
  "./pokedex-encounters-pla.js",
  "./pokedex-encounters-gen9.js",
  "./pokedex-evolutions.js",
  "./pokedex-tms.js",
  "./pokedex-encounter-order.js",
  "./pokedex-transfer.js",
  "./pokedex-ribbons.js",
  "./pokedex-regional-dex.js",
  "./pokedex-learnsets.js",
  "./pokedex-data.js",
  "./pokedex-gen2.js",
  "./pokedex-gen3.js",
  "./pokedex-gen4.js",
  "./pokedex-gen5.js",
  "./pokedex-gen6.js",
  "./pokedex-gen7.js",
  "./pokedex-gen8.js",
  "./pokedex-gen9.js"
];
const CDN = [
  'https://unpkg.com/react@18.3.1/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js'
];
const SPRITES = 'pokedex-sprites';   // kept across versions — no need to re-download

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(VERSION);
    // One at a time, so a renamed or missing file can't stop the install.
    await Promise.all(CORE.map(u => c.add(u).catch(() => {})));
    await Promise.all(CDN.map(u => fetch(u, {mode: 'cors'}).then(r => r.ok && c.put(u, r)).catch(() => {})));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== VERSION && k !== SPRITES) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const isImg = /\.(png|jpe?g|gif|webp|svg)$/i.test(url.pathname) && url.origin === location.origin;
  // Images are left entirely to the browser. The page reads saved sprites
  // from storage itself, which proved far more reliable on Android.
  if (isImg) return;
  // Pages, scripts and styles: network first, so edits always show up.
  // The cached copy is used only when there's no connection.
  e.respondWith((async () => {
    const c = await caches.open(VERSION);
    try {
      let r = await fetch(req);
      // Netlify redirects /Pokedex.dc.html to /pokedex.dc. Browsers reject a
      // redirected response handed back for a page load, so pass on a clean copy.
      if (r.redirected && req.mode === 'navigate') {
        r = new Response(await r.blob(), {status: r.status, statusText: r.statusText, headers: r.headers});
      }
      if (r.ok || r.type === 'opaque') {
        // Store under the clean URL so editor cache-busting queries don't pile up.
        const key = url.origin === location.origin ? url.origin + url.pathname : req.url;
        c.put(key, r.clone());
      }
      return r;
    } catch (err) {
      const hit = await c.match(req, {ignoreSearch: true, ignoreVary: true});
      if (hit) return hit;
      if (req.mode === 'navigate') return (await c.match('./Pokedex.dc.html', {ignoreVary: true})) || (await c.match('./index.html', {ignoreVary: true})) || (await c.match('./', {ignoreVary: true})) || new Response('Offline', {status: 503});
      return new Response('', {status: 504});
    }
  })());
});
