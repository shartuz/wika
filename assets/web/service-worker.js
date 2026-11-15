// Offline support when Wika is hosted as a website.
// Network first (so edits show up immediately), cached copy when offline.
'use strict';

const CACHE_NAME = 'wika-dictionary-v2';
const CORE_FILES = [
  './',
  'index.html',
  'css/styles.css',
  'js/app.js',
  'js/translator.js',
  'data/dictionary.json',
  'data/english_finnish.json',
  'data/finnish_english.json',
  'manifest.json',
  'images/icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Remove caches from older versions.
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET' || new URL(request.url).origin !== location.origin) return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      })
      .catch(() => caches.match(request, { ignoreSearch: true }))
  );
});
