const CACHE_NAME = '20171125';
const CACHE_FILES = [
  '/',
  '/manifest.json',
  '/app.js',
  '/book-affiliate.js',
  '/tani-image.js',
  '/app.css',
  '/grd.css',
  '/normalize.css',
  '/img/hiloki.jpg',
  '/img/favicon.jpg',
  '/img/touch-icon-iphone.jpg',
  '/img/touch-icon-ipad.jpg',
  '/img/touch-icon-iphone-retina.jpg',
  '/img/touch-icon-ipad-retina.jpg',
  '/img/app/128x128.png',
  '/img/app/144x144.png',
  '/img/app/152x152.png',
  '/img/app/192x192.png',
  '/img/app/384x384.png',
  '/img/book/css-architecture.jpg',
  '/img/book/inclusive-design.jpg',
  '/img/book/webperf-guide.jpg',
  '/img/tani/0daeedd2',
  '/img/tani/1979143d',
  '/img/tani/1f71ee22',
  '/img/tani/20760476',
  '/img/tani/2398a915',
  '/img/tani/23e37360',
  '/img/tani/2c891c52',
  '/img/tani/30522c15',
  '/img/tani/3411fa18',
  '/img/tani/4474e4e6',
  '/img/tani/4ba81f9c',
  '/img/tani/5425ff6f',
  '/img/tani/67fadce6',
  '/img/tani/6e78893d',
  '/img/tani/78459acc',
  '/img/tani/79b6c9e3',
  '/img/tani/7db2f351',
  '/img/tani/80573021',
  '/img/tani/81450afd',
  '/img/tani/850ea9a6',
  '/img/tani/913cc759',
  '/img/tani/9ff2dc60',
  '/img/tani/a569cf97',
  '/img/tani/ac8330cf',
  '/img/tani/b35b3dad',
  '/img/tani/c356008c',
  '/img/tani/cc3bbf74',
  '/img/tani/d477e695',
  '/img/tani/e3245d30',
  '/img/tani/fbe1b264',
  '/img/tani/05cd4125',
  '/img/tani/fe6bdd1c',
  '/img/tani/3f501125',
  '/img/tani/a2b80a00',
  '/img/tani/d488eda9',
  '/img/tani/dceec204',
  '/img/tani/89337651',
  '/img/tani/eccdd96f',
  '/img/tani/22d3079a',
  '/img/tani/78d2f3a9',
  '/img/tani/95825320',
  '/img/tani/b573c491'
];

self.addEventListener('install', e => {
  e.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', e => {
  const deletion = caches.keys()
    .then(keys => keys.filter(key => key !== CACHE_NAME))
    .then(keys => Promise.all(keys.map(key => caches.delete(key))));

  e.waitUntil(deletion.then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  if (!CACHE_FILES.some(file => e.request.url.includes(file))) {
    return;
  }

  const cache = caches.match(e.request).then(response => {
    return response || fetch(e.request.clone()).then(response => {
      if (response.ok) {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
      }

      return response;
    });
  });

  e.respondWith(cache);
});
