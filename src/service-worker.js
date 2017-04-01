const CACHE_NAME = '20170401';
const CACHE_FILES = [
  '/',
  '/manifest.json',
  '/js/app.js',
  '/css/app.css',
  '/css/grd.css',
  '/css/normalize.css',
  '/webcomponents/book-affiliate.html',
  '/webcomponents/tani-image.html',
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
  '/img/book/frontend-engineer.jpg',
  '/img/book/frontend-knowledge.jpg',
  '/img/tani/0daeedd2.jpg',
  '/img/tani/0daeedd2.webp',
  '/img/tani/1979143d.jpg',
  '/img/tani/1979143d.webp',
  '/img/tani/1f71ee22.jpg',
  '/img/tani/1f71ee22.webp',
  '/img/tani/20760476.jpg',
  '/img/tani/20760476.webp',
  '/img/tani/2398a915.jpg',
  '/img/tani/2398a915.webp',
  '/img/tani/23e37360.jpg',
  '/img/tani/23e37360.webp',
  '/img/tani/2c891c52.jpg',
  '/img/tani/2c891c52.webp',
  '/img/tani/30522c15.jpg',
  '/img/tani/30522c15.webp',
  '/img/tani/3411fa18.jpg',
  '/img/tani/3411fa18.webp',
  '/img/tani/4474e4e6.jpg',
  '/img/tani/4474e4e6.webp',
  '/img/tani/4ba81f9c.jpg',
  '/img/tani/4ba81f9c.webp',
  '/img/tani/5425ff6f.jpg',
  '/img/tani/5425ff6f.webp',
  '/img/tani/67fadce6.jpg',
  '/img/tani/67fadce6.webp',
  '/img/tani/6e78893d.jpg',
  '/img/tani/6e78893d.webp',
  '/img/tani/78459acc.jpg',
  '/img/tani/78459acc.webp',
  '/img/tani/79b6c9e3.jpg',
  '/img/tani/79b6c9e3.webp',
  '/img/tani/7db2f351.jpg',
  '/img/tani/7db2f351.webp',
  '/img/tani/80573021.jpg',
  '/img/tani/80573021.webp',
  '/img/tani/81450afd.jpg',
  '/img/tani/81450afd.webp',
  '/img/tani/850ea9a6.jpg',
  '/img/tani/850ea9a6.webp',
  '/img/tani/913cc759.jpg',
  '/img/tani/913cc759.webp',
  '/img/tani/9ff2dc60.jpg',
  '/img/tani/9ff2dc60.webp',
  '/img/tani/a569cf97.jpg',
  '/img/tani/a569cf97.webp',
  '/img/tani/ac8330cf.jpg',
  '/img/tani/ac8330cf.webp',
  '/img/tani/b35b3dad.jpg',
  '/img/tani/b35b3dad.webp',
  '/img/tani/c356008c.jpg',
  '/img/tani/c356008c.webp',
  '/img/tani/cc3bbf74.jpg',
  '/img/tani/cc3bbf74.webp',
  '/img/tani/d477e695.jpg',
  '/img/tani/d477e695.webp',
  '/img/tani/e3245d30.jpg',
  '/img/tani/e3245d30.webp',
  '/img/tani/fbe1b264.jpg',
  '/img/tani/fbe1b264.webp',
  '/img/tani/05cd4125.jpg',
  '/img/tani/05cd4125.webp',
  '/img/tani/fe6bdd1c.jpg',
  '/img/tani/fe6bdd1c.webp',
  '/img/tani/3f501125.jpg',
  '/img/tani/3f501125.webp',
  '/img/tani/a2b80a00.jpg',
  '/img/tani/a2b80a00.webp',
  '/img/tani/d488eda9.jpg',
  '/img/tani/d488eda9.webp',
  '/img/tani/dceec204.jpg',
  '/img/tani/dceec204.webp',
  '/img/tani/89337651.jpg',
  '/img/tani/89337651.webp',
  '/img/tani/eccdd96f.jpg',
  '/img/tani/eccdd96f.webp',
  '/img/tani/22d3079a.jpg',
  '/img/tani/22d3079a.webp'
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
