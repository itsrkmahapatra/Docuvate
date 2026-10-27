/**
 * ============================================================================
 * DOCUVATE SERVICE WORKER (v3.1.0 OFFLINE AIRPLANE-MODE ENGINE)
 * 100% Client-Side Sandboxed Processing • Zero Cloud Uploads
 * Engineered by Raj Kishor Mahapatra
 * ============================================================================
 */

const CACHE_NAME = 'docuvate-v3.1.0-offline';

const STATIC_ASSETS = [
  './',
  './index.html',
  './merge-pdf.html',
  './split-pdf.html',
  './compress-pdf.html',
  './compress-pdf-to-100kb.html',
  './sign-pdf.html',
  './pdf-to-image.html',
  './image-to-pdf.html',
  './organize-pdf.html',
  './protect-pdf.html',
  './ocr-pdf.html',
  './image-resizer-kb.html',
  './crop-image.html',
  './passport-photo.html',
  './convert-image.html',
  './inkscribe.html',
  './certificate-downloader.html',
  './certificate-disclaimer.html',
  './terms.html',
  './disclaimer.html',
  './css/style.css',
  './js/app.js',
  './js/inkscribe.js',
  './js/upi-widget.js',
  './vendor/lucide.min.js',
  './vendor/pdf-lib.min.js',
  './vendor/pdf.min.js',
  './vendor/pdf.worker.min.js',
  './vendor/jszip.min.js',
  './vendor/heic2any.min.js',
  './vendor/tesseract.min.js',
  './vendor/html2canvas.min.js',
  './vendor/jspdf.umd.min.js',
  './vendor/mammoth.browser.min.js',
  './vendor/qrcode.min.js',
  './vendor/puter.js',
  './logo.png',
  './assets/developer.png',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
      .catch((err) => console.warn('[Docuvate PWA] Pre-cache partial warning:', err))
  );
});

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

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  event.respondWith(
    caches.match(req).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached copy immediately; fetch update in background for assets
        fetch(req).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => cache.put(req, networkResponse));
          }
        }).catch(() => {/* Offline */});
        return cachedResponse;
      }
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
        if (req.headers.get('accept')?.includes('text/html')) {
          return caches.match('./index.html');
        }
      });
    })
  );
});
