'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "261a1fe315ab7285e06e09aa4e1beda1",
"assets/AssetManifest.json": "8e65303357c86893b5ceec684a0e97da",
"assets/assets/logo_512x512.png": "04c0fe5ce6755e328b2a4749acd912f3",
"assets/assets/animations/boo.json": "7b164e7040860deac47277836b20a9cf",
"assets/assets/da.png": "fba378a75727cc8f232adfaa7ca01a6d",
"assets/assets/fonts/OpenSans/OpenSans-Semibold.ttf": "33f225b8f5f7d6b34a0926f58f96c1e9",
"assets/assets/fonts/OpenSans/OpenSans-Light.ttf": "1bf71be111189e76987a4bb9b3115cb7",
"assets/assets/fonts/OpenSans/OpenSans-Regular.ttf": "629a55a7e793da068dc580d184cc0e31",
"assets/assets/fonts/OpenSans/OpenSans-ExtraBold.ttf": "8bac22ed4fd7c8a30536be18e2984f84",
"assets/assets/fonts/OpenSans/OpenSans-Medium.ttf": "3df8f041f884b3fd7e14c8fd4c3d9a1d",
"assets/assets/fonts/OpenSans/OpenSans-Bold.ttf": "50145685042b4df07a1fd19957275b81",
"assets/assets/fonts/Ubuntu/Ubuntu-Bold.ttf": "008e6bc48c8eaa5d2855d57e6b0b8595",
"assets/assets/fonts/Ubuntu/Ubuntu-Regular.ttf": "7f0b42d1d6a4d3e646c558185f6711ea",
"assets/assets/fonts/Ubuntu/Ubuntu-Light.ttf": "2759de5c01527bd9730b4d1838e6c938",
"assets/assets/fonts/Ubuntu/Ubuntu-Medium.ttf": "2aaaafd5fe853746266cad7eafcc871e",
"assets/assets/logo.png": "dfc2ae4a9e0172152bcfe537bcebba98",
"assets/assets/json/under_construction.json": "2d361eaa7dd473983c52ee2bffe395f4",
"assets/assets/images/empty.png": "fc1153838db074cf6a0c13e2091b1ea9",
"assets/AssetManifest.bin": "ad05a7d5b1003224a3d83d9780f37311",
"assets/fonts/MaterialIcons-Regular.otf": "c908e4b5cbf4a1b23e36b44c3ab582cf",
"assets/packages/bootstrap_icons/fonts/BootstrapIcons.ttf": "27b7e504e77855463bfa46c31a3ab2d6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "e8327570f02133b8a3b9c85318531e35",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "2ffa1517cb5191a2a12dea2678a397d5",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "89246a78ddf5bc3825b118b7816fc6f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "fd8e2fb8370f72cfb6de7f135d60dcff",
"assets/packages/elegant_notification/assets/icons/info.png": "84b36b60ddacca6c063112fd636bdefb",
"assets/packages/elegant_notification/assets/icons/error.png": "2a84d22ca4a8d9123f1e3149121b0976",
"assets/packages/elegant_notification/assets/icons/success.png": "a27784120d6634f48b24e12c4604f9d9",
"assets/FontManifest.json": "197e836bf2898867326a27e34cca9593",
"assets/NOTICES": "4d357b8f6b014ca33ed0f4f069a19a4a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"manifest.json": "7b60c7c7866f307aae5d29ae04feef6b",
"firebase-messaging-sw.js": "1795bbcc857fb6062f37841341fa0c71",
"logo.png": "987dc3aee49fe091ef33a96487d0ddba",
"index.html": "80919e22336d72b15ca0e1341d8745e5",
"/": "80919e22336d72b15ca0e1341d8745e5",
"icons/Icon-maskable-512.png": "cee92d9031357ff9bfcf83001d503512",
"icons/Icon-512.png": "cee92d9031357ff9bfcf83001d503512",
"icons/Icon-192.png": "49a3968ca0bdc781ffc0159228853af3",
"icons/Icon-maskable-192.png": "49a3968ca0bdc781ffc0159228853af3",
"favicon.png": "2428af5f724dd3374de3718ba29f45a2",
"version.json": "868449ac59434bbbeae39692a24af023",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"miner-loading-bar.riv": "bb8daf078fd02553d1a2366dffc80ae2",
"README.md": "82610568180029b050b8e6923035fea7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
