/**
 * Docuvate Service Worker - Offline-First Engine
 * Caches app shell, styles, icons, and CDN-hosted WASM/JS libraries
 */

const CACHE_NAME = 'docuvate-v2.1.0';
const STATIC_ASSETS = [
  './',
  './index.html',
  './inkscribe.html',
  './certificate-downloader.html',
  './terms.html',
  './disclaimer.html',
  './css/style.css',
  './css/inkscribe.css',
  './js/app.js',
  './js/inkscribe.js',
  './js/upi-widget.js',
  './js/compressor.worker.js',
  './logo.png',
  './assets/developer.png',
  './manifest.json'
];

// Install event - pre-cache core application shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate event - clean up obsolete caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - Cache-first with stale-while-revalidate for CDN libraries & local assets
self.addEventListener('fetch', (event) => {
  const req = event.request;
  
  // Only handle GET requests
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Cache strategy:
  // 1. Local assets or known CDN domains (cdnjs, unpkg, jsdelivr, Google Fonts)
  const isCdn = url.hostname.includes('cdnjs.cloudflare.com') ||
                url.hostname.includes('unpkg.com') ||
                url.hostname.includes('cdn.jsdelivr.net') ||
                url.hostname.includes('fonts.googleapis.com') ||
                url.hostname.includes('fonts.gstatic.com');

  if (url.origin === location.origin || isCdn) {
    event.respondWith(
      caches.match(req).then((cachedResponse) => {
        if (cachedResponse) {
          // Return cached response and optionally update cache in background
          fetch(req).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(req, networkResponse);
              });
            }
          }).catch(() => {
            // Ignore background fetch errors in offline mode
          });
          return cachedResponse;
        }

        // Not in cache, fetch from network and cache
        return fetch(req).then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200) {
            return networkResponse;
          }
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, responseToCache);
          });
          return networkResponse;
        }).catch(() => {
          // Offline fallback
          if (req.headers.get('accept')?.includes('text/html')) {
            return caches.match('./index.html');
          }
        });
      })
    );
  }
});
