/* Zihin Üssü Service Worker - v1.2.2
 * Tek dosya HTML uygulaması için minimal cache
 */
const CACHE_NAME = 'zihinussu-v1.2.2';
const URLS_TO_CACHE = [
  './',
  './index.html'
];

// Install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
  self.skipWaiting();
});

// Activate (eski cache'leri temizle)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) => {
      return Promise.all(
        names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))
      );
    })
  );
  self.clients.claim();
});

// Fetch — Cache First, fallback Network
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        // Sadece HTML için cache güncelle
        if (event.request.url.includes('index.html') || event.request.url.endsWith('/')) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // Offline: cached index.html dön
        return caches.match('./index.html');
      });
    })
  );
});
