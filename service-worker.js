/* Wika PWA offline cache. All Wika files are served from this PWA's own scope.
   Never cache external translation requests or any cross-origin response. */
const CACHE_NAME = 'wika-dictionary-offline-v1-20261028';
const PRECACHE = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./dictionary.json",
  "./wika-mobile-compat.js",
  "./wika-online-translator.js",
  "./pwa-status.js",
  "./manifest.webmanifest",
  "./icons/wika-180.png",
  "./icons/wika-192.png",
  "./icons/wika-512.png",
  "./images/anatomy.jpg",
  "./images/antidote.jpg",
  "./images/commontherapeuticlevels.jpg",
  "./images/digestive.jpg",
  "./images/drugswof.jpg",
  "./images/fruits.jpg",
  "./images/icon.png",
  "./images/isbar.jpg",
  "./images/kitchen.jpg",
  "./images/medsending.jpg",
  "./images/news.jpg"
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // Fail installation if any required dictionary/image asset is missing.
    await cache.addAll(PRECACHE.map(path => new URL(path, self.registration.scope).toString()));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('wika-dictionary-offline-') && key !== CACHE_NAME)
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  // Do not intercept MyMemory or any other third-party resources.
  if (url.origin !== self.location.origin || !url.href.startsWith(self.registration.scope)) return;

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response.ok) return response;
      } catch (_) { /* offline */ }
      const cache = await caches.open(CACHE_NAME);
      return (await cache.match(new URL('./index.html', self.registration.scope))) ||
        new Response('Wika Dictionary is not available offline yet. Open it once while online.',
          {status:503, headers:{'Content-Type':'text/plain; charset=utf-8'}});
    })());
    return;
  }

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    // Important: original app.js fetches dictionary.json with a timestamp query.
    // Ignore the query string so it can retrieve the exact precached JSON offline.
    const cached = await cache.match(request, {ignoreSearch:true});
    if (cached) return cached;
    const response = await fetch(request);
    // Cache only same-origin files inside this app's scope.
    if (response.ok && response.type === 'basic') {
      await cache.put(request, response.clone());
    }
    return response;
  })());
});
