'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "03e7b5b56f45350c96f45eb7e605a204",
"assets/assets/de_30k_nouml.txt": "db63ef88a1cdba8e15cdef20c5428593",
"assets/assets/english.txt": "d4c8086660b601879f38e11abc2ebe91",
"assets/assets/men_wearing_jacket.gif": "c5738331b11f3db2db8ad0b3776966a7",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "0f79cc3ca36578c9924aa4443fb22f85",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "4c62a3e6129e5a5f15ef8d190d374884",
"/": "4c62a3e6129e5a5f15ef8d190d374884",
"main.dart.js": "982e18384da59b33e2ab2cf991d528e2",
"manifest.json": "576b4cb9a7cf19f02e28eb226e967855"
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
