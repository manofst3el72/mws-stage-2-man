var all_cache = 'restaurantreviews-cache-v1';

var urlsToCache = [
    '/',
    './index.html',
    './restaurant.html',
    './manifest.json',
    './css/styles.css',
    './js/dbhelper.js',
    './js/main.js',
    './js/restaurant_info.js',
    '/data/restaurants.json'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
      caches.open(all_cache)
        .then(function (cache) {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
        })
    );
  });



self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
        .catch(error => consloe.log(error, event.request))
    );
});