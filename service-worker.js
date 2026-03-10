const CACHE_NAME = "radius-raid-v1";

const urlsToCache = [
  "./",
  "./index.html",
  
  "./js/touch-compat.js",
  "./js/jsfxr.js",
  "./js/util.js",
  "./js/storage.js",
  "./js/definitions.js",
  "./js/audio.js",
  "./js/text.js",
  "./js/hero.js",
  "./js/enemy.js",
  "./js/bullet.js",
  "./js/explosion.js",
  "./js/powerup.js",
  "./js/particle.js",
  "./js/particleemitter.js",
  "./js/textpop.js",
  "./js/levelpop.js",
  "./js/button.js",
  "./js/game.js"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      return response || fetch(event.request);
    })
  );
});