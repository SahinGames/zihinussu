// Zihin Üssü Service Worker - v1.3.0
// Strateji: Network-first (her zaman taze HTML), fallback offline cache

const CACHE_VERSION = 'zihinussu-v1.3.0';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json'
];

// Install — sadece minimal shell cache
self.addEventListener('install', (event) => {
  // Yeni SW hemen aktif olsun
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => cache.addAll(APP_SHELL).catch(() => {}))
  );
});

// Activate — eski cache'leri temizle
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      // Eski cache versiyonlarını sil
      caches.keys().then(names => Promise.all(
        names.filter(n => n !== CACHE_VERSION).map(n => caches.delete(n))
      )),
      // Tüm açık sekmeleri kontrol al
      self.clients.claim()
    ])
  );
});

// Fetch — Network-first (taze sürümü öncelikle çek, başarısız olursa cache)
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Sadece GET isteklerini cache'le
  if (req.method !== 'GET') return;

  // Cross-origin (CDN, AdMob vs) cache'leme
  if (!req.url.startsWith(self.location.origin)) return;

  event.respondWith(
    fetch(req)
      .then(networkResponse => {
        // Başarılı network → cache'e kaydet ve dön
        if (networkResponse && networkResponse.status === 200) {
          const respClone = networkResponse.clone();
          caches.open(CACHE_VERSION).then(cache => {
            cache.put(req, respClone).catch(() => {});
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Network başarısız → cache'den dön (offline)
        return caches.match(req);
      })
  );
});

// Mesaj — manuel skipWaiting tetikleme
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
