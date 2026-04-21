const CACHE = 'mai-v1.0.0';
const STATIC = [
  '/',
  '/index.html',
  '/styles/maiV1.1.css',
  '/scripts/engine.js',
  '/scripts/ui.js',
  '/scripts/app.js',
];

// Install: cache static assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(STATIC)).then(() => self.skipWaiting())
  );
});

// Activate: clear old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: network-first for API, cache-first for static
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Skip non-GET and cross-origin API calls
  if (e.request.method !== 'GET') return;
  if (url.hostname.includes('openai.com') || url.hostname.includes('anthropic.com') ||
      url.hostname.includes('groq.com') || url.hostname.includes('googleapis.com') ||
      url.hostname.includes('pollinations.ai') || url.hostname.includes('openrouter.ai')) {
    return; // Let API calls pass through without caching
  }

  e.respondWith(
    caches.match(e.request).then(cached => {
      const fresh = fetch(e.request).then(res => {
        if (res.ok && res.status < 400) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone)).catch(() => {});
        }
        return res;
      }).catch(() => cached);
      return cached || fresh;
    })
  );
});
kipWaiting();
