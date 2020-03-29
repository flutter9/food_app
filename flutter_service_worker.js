'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/main.dart.js": "de7fca1e2b1e0a19de201b18bf31d92b",
"/assets/LICENSE": "954706ef951b9553ecb95d1a66a0f589",
"/assets/AssetManifest.json": "33d47b171acba0713aae87cb7a710911",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/seafood.jpeg": "8cf2dbd52c123fa74502dbfe434f5412",
"/assets/assets/chicken.png": "03604c5633b450fa859dfa1b925ae42d",
"/assets/assets/meat.png": "7fc5602d5397244b6eb8b6524e40869c",
"/assets/assets/burger.png": "39a069848953c9a8a1b4fb9e30f1b79e",
"/assets/assets/fish.png": "263b205db5db95a881fe7fa5a638786c",
"/assets/assets/burger.jpg": "6641dfff33105948a1b82a641b550c80"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
