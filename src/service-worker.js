const CACHE_KEY = 'v2';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_KEY).then(cache => {
      return cache.addAll([
        '/',
        '/js/app.js',
        '/js/dom-delegate.js',
        '/css/app.css',
        '/css/grd.css',
        '/css/normalize.css',
        '/img/hiloki.jpg',
        '/img/0daeedd2-eaef-4dc6-a833-8f6c9efe1711.jpg',
        '/img/0daeedd2-eaef-4dc6-a833-8f6c9efe1711.webp',
        '/img/1979143d-b8f2-4847-ac2e-cf5c733efd46.jpg',
        '/img/1979143d-b8f2-4847-ac2e-cf5c733efd46.webp',
        '/img/1f71ee22-dfd3-4894-ad28-65cb2d284517.jpg',
        '/img/1f71ee22-dfd3-4894-ad28-65cb2d284517.webp',
        '/img/20760476-68f5-4ab8-bb79-ccc18ce38c49.jpg',
        '/img/20760476-68f5-4ab8-bb79-ccc18ce38c49.webp',
        '/img/2398a915-6032-4c51-8cee-88dd25f8aa3b.jpg',
        '/img/2398a915-6032-4c51-8cee-88dd25f8aa3b.webp',
        '/img/23e37360-0785-4cca-aa96-f3479a6f0ae0.jpg',
        '/img/23e37360-0785-4cca-aa96-f3479a6f0ae0.webp',
        '/img/2c891c52-4302-4559-a47a-9418032f7e4b.jpg',
        '/img/2c891c52-4302-4559-a47a-9418032f7e4b.webp',
        '/img/30522c15-a217-46f0-b842-8be8bdadb43b.jpg',
        '/img/30522c15-a217-46f0-b842-8be8bdadb43b.webp',
        '/img/3411fa18-664d-457f-b635-938bc9c96675.jpg',
        '/img/3411fa18-664d-457f-b635-938bc9c96675.webp',
        '/img/4474e4e6-87c4-4d91-9a55-f634e5d60a9e.jpg',
        '/img/4474e4e6-87c4-4d91-9a55-f634e5d60a9e.webp',
        '/img/4ba81f9c-d5a5-423f-8911-6578d7e9886f.jpg',
        '/img/4ba81f9c-d5a5-423f-8911-6578d7e9886f.webp',
        '/img/5425ff6f-a4f0-4223-b656-cc1e9895db1f.jpg',
        '/img/5425ff6f-a4f0-4223-b656-cc1e9895db1f.webp',
        '/img/5baa3a84-6ee3-400f-bab1-2637e5fbdae1.jpg',
        '/img/5baa3a84-6ee3-400f-bab1-2637e5fbdae1.webp',
        '/img/67fadce6-297f-48f0-8be4-2dcb709d7909.jpg',
        '/img/67fadce6-297f-48f0-8be4-2dcb709d7909.webp',
        '/img/6e78893d-c969-4b90-94ad-0c123bc131bd.jpg',
        '/img/6e78893d-c969-4b90-94ad-0c123bc131bd.webp',
        '/img/78459acc-5de2-463f-9a2e-3ed6ca294800.jpg',
        '/img/78459acc-5de2-463f-9a2e-3ed6ca294800.webp',
        '/img/79b6c9e3-533f-4f28-af61-4e90faa37731.jpg',
        '/img/79b6c9e3-533f-4f28-af61-4e90faa37731.webp',
        '/img/7db2f351-930d-4ed1-911d-57ebd2a87f71.jpg',
        '/img/7db2f351-930d-4ed1-911d-57ebd2a87f71.webp',
        '/img/80573021-1777-4271-b494-9d20d7eb3536.jpg',
        '/img/80573021-1777-4271-b494-9d20d7eb3536.webp',
        '/img/81450afd-2a08-4535-b390-f99a2dad603d.jpg',
        '/img/81450afd-2a08-4535-b390-f99a2dad603d.webp',
        '/img/823f9b08-da3d-4334-a5d1-cc7096355974.jpg',
        '/img/823f9b08-da3d-4334-a5d1-cc7096355974.webp',
        '/img/850ea9a6-77a9-446a-947a-96beab28f689.jpg',
        '/img/850ea9a6-77a9-446a-947a-96beab28f689.webp',
        '/img/913cc759-0c91-4bf6-846a-3726eab0e868.jpg',
        '/img/913cc759-0c91-4bf6-846a-3726eab0e868.webp',
        '/img/9baef3d0-c805-4ae9-b60e-0e1af6330a63.jpg',
        '/img/9baef3d0-c805-4ae9-b60e-0e1af6330a63.webp',
        '/img/9ff2dc60-1f9b-4e61-9d03-809411717eba.jpg',
        '/img/9ff2dc60-1f9b-4e61-9d03-809411717eba.webp',
        '/img/a569cf97-77f8-48da-ad71-56ab894ce6bd.jpg',
        '/img/a569cf97-77f8-48da-ad71-56ab894ce6bd.webp',
        '/img/ac8330cf-f3ef-444d-9ae0-91f5f878d25c.jpg',
        '/img/ac8330cf-f3ef-444d-9ae0-91f5f878d25c.webp',
        '/img/b35b3dad-d099-4125-89fe-7d62d223b650.jpg',
        '/img/b35b3dad-d099-4125-89fe-7d62d223b650.webp',
        '/img/c356008c-b20f-4487-9e30-176e89036991.jpg',
        '/img/c356008c-b20f-4487-9e30-176e89036991.webp',
        '/img/cc3bbf74-6bd3-40fd-881e-5b246db145b4.jpg',
        '/img/cc3bbf74-6bd3-40fd-881e-5b246db145b4.webp',
        '/img/d477e695-0039-4a15-85af-213ac2dc59ba.jpg',
        '/img/d477e695-0039-4a15-85af-213ac2dc59ba.webp',
        '/img/e1bd8e9b-2cd1-4b19-bfd9-449850720f17.jpg',
        '/img/e1bd8e9b-2cd1-4b19-bfd9-449850720f17.webp',
        '/img/e3245d30-1852-4c21-8b20-6708bbecc044.jpg',
        '/img/e3245d30-1852-4c21-8b20-6708bbecc044.webp',
        '/img/fbe1b264-db7e-4e35-b4e8-80163ebada27.jpg',
        '/img/fbe1b264-db7e-4e35-b4e8-80163ebada27.webp',
        '/img/ff400858-1340-4477-90ec-77a64cc96309.jpg',
        '/img/ff400858-1340-4477-90ec-77a64cc96309.webp',
        '/img/ff95e033-efe1-4bb8-97a9-feaaaa36f70e.jpg',
        '/img/ff95e033-efe1-4bb8-97a9-feaaaa36f70e.webp'
      ]);
    }).catch(e => console.error(e))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    Promise.all([
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => cacheName !== CACHE_KEY)
            .map(cacheName => caches.delete(cacheName))
        );
      }),
      self.clients.claim()
    ]).catch(e => console.error(e))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.open(CACHE_KEY).then(cache => {
      return cache.match(e.request).then(response => {
        return response || fetch(e.request);
      });
    }).catch(e => console.error(e))
  );
});
