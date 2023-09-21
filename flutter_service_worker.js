'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"logo.png": "987dc3aee49fe091ef33a96487d0ddba",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/assets/json/under_construction.json": "2d361eaa7dd473983c52ee2bffe395f4",
"assets/assets/da.png": "fba378a75727cc8f232adfaa7ca01a6d",
"assets/assets/logo.png": "dfc2ae4a9e0172152bcfe537bcebba98",
"assets/assets/images/empty.png": "fc1153838db074cf6a0c13e2091b1ea9",
"assets/assets/logo_512x512.png": "04c0fe5ce6755e328b2a4749acd912f3",
"assets/assets/fonts/Roboto_Mono/RobotoMono-Medium.ttf": "b090e3202375adb631519fab6bf121c2",
"assets/assets/fonts/Roboto_Mono/RobotoMono-Light.ttf": "14fa2a726b29e8805e287c002ab64397",
"assets/assets/fonts/Roboto_Mono/RobotoMono-Thin.ttf": "d1a7b45f28bf337cab8adf3992f669a0",
"assets/assets/fonts/Roboto_Mono/RobotoMono-Bold.ttf": "0339b745f10bb01da181af1cdc33c361",
"assets/assets/fonts/Roboto_Mono/RobotoMono-SemiBold.ttf": "e9372f334303337690d46c5a169f3b10",
"assets/assets/fonts/Roboto_Mono/RobotoMono-Regular.ttf": "7e173cf37bb8221ac504ceab2acfb195",
"assets/assets/fonts/Roboto_Mono/RobotoMono-ExtraLight.ttf": "b8b8a584a0b8307e1aa11f9f037a0502",
"assets/assets/fonts/Red_Hat_Mono/RedHatMono-SemiBold.ttf": "3bfed415076cc9a51eba49dd9062d604",
"assets/assets/fonts/Red_Hat_Mono/RedHatMono-Light.ttf": "e9e3cd0d3a2404d9408a8a564e249079",
"assets/assets/fonts/Red_Hat_Mono/RedHatMono-Medium.ttf": "7b2c360711a95731165cf0149e99e8cc",
"assets/assets/fonts/Red_Hat_Mono/RedHatMono-Bold.ttf": "7f398c54853daf982faf62bcc3d0d269",
"assets/assets/fonts/Red_Hat_Mono/RedHatMono-Regular.ttf": "740412b1555105b2bb49850bebb6306b",
"assets/assets/fonts/Inter/Inter-SemiBold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"assets/assets/fonts/Inter/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/fonts/Inter/Inter-Thin.ttf": "2dce622147cace7b467d9929b7708430",
"assets/assets/fonts/Inter/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/Inter/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/assets/fonts/Inter/Inter-Light.ttf": "d55f45d07cfe01e8797bd1566561f718",
"assets/assets/fonts/Inter/Inter-ExtraLight.ttf": "0f3ac0692901f70f1ac32cf079355051",
"assets/assets/fonts/Inter/Inter-Black.ttf": "980c7e8757e741bb49c7c96513924c61",
"assets/assets/fonts/Inter/Inter-ExtraBold.ttf": "c9709fb8e32755490795ce5bd226c3a0",
"assets/assets/fonts/Oswald/Oswald-ExtraLight.ttf": "bae2f0108b0aad1a511a8f654cc16c0e",
"assets/assets/fonts/Oswald/Oswald-SemiBold.ttf": "6a5d13d326956086b84d9c7fb66d2d75",
"assets/assets/fonts/Oswald/Oswald-Bold.ttf": "452bfeb5bf78e71cc3cd6e720ac24bd4",
"assets/assets/fonts/Oswald/Oswald-Light.ttf": "6ee38c23e5466cb24e844b1c345d610d",
"assets/assets/fonts/Oswald/Oswald-Regular.ttf": "a7ccbd3cd9a9ff21ec41086dcc23ebe6",
"assets/assets/fonts/Oswald/Oswald-Medium.ttf": "14cf874b374ca47427bbceb4b2373c3a",
"assets/assets/fonts/DM_Sans/DMSans-ExtraBold.ttf": "ebcd8d6147f734b6b411ee296741dca6",
"assets/assets/fonts/DM_Sans/DMSans-SemiBold.ttf": "41de6d553ba4b1825e9cf023e97e2ee4",
"assets/assets/fonts/DM_Sans/DMSans-Medium.ttf": "6244219cea1110e6ec49e950f070acf8",
"assets/assets/fonts/DM_Sans/DMSans-Regular.ttf": "0305ad7453af42d8f036dd29294ae5c3",
"assets/assets/fonts/DM_Sans/DMSans-Bold.ttf": "337352e89c0a500c19e7c3a1cd83161c",
"assets/assets/fonts/DM_Sans/DMSans-Light.ttf": "e7520627eb609ab1e02dd88f972a3b2b",
"assets/assets/fonts/DM_Sans/DMSans-Thin.ttf": "dc3195b079d33dfa16de299901913db8",
"assets/assets/fonts/DM_Sans/DMSans-ExtraLight.ttf": "fec3b8ae381cd5a5df1f5c4bf1f3dcac",
"assets/AssetManifest.json": "e3537f81456b9c5b631c592372ad00c4",
"assets/NOTICES": "2e584dea93b1acf1b2914c57245b319c",
"assets/AssetManifest.bin": "8e5ceefef84e6071a23cd04274fef4cf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "fd8e2fb8370f72cfb6de7f135d60dcff",
"assets/packages/bootstrap_icons/fonts/BootstrapIcons.ttf": "27b7e504e77855463bfa46c31a3ab2d6",
"assets/packages/elegant_notification/assets/icons/error.png": "2a84d22ca4a8d9123f1e3149121b0976",
"assets/packages/elegant_notification/assets/icons/info.png": "84b36b60ddacca6c063112fd636bdefb",
"assets/packages/elegant_notification/assets/icons/success.png": "a27784120d6634f48b24e12c4604f9d9",
"assets/fonts/MaterialIcons-Regular.otf": "08744f03fd45257d6deb4485fa3238a2",
"assets/FontManifest.json": "efdfc00013675bf6810e20c693122f3b",
"version.json": "868449ac59434bbbeae39692a24af023",
"icons/Icon-maskable-192.png": "49a3968ca0bdc781ffc0159228853af3",
"icons/Icon-192.png": "49a3968ca0bdc781ffc0159228853af3",
"icons/Icon-maskable-512.png": "cee92d9031357ff9bfcf83001d503512",
"icons/Icon-512.png": "cee92d9031357ff9bfcf83001d503512",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"index.html": "40fbcebf68e159b1bdba33f062d7e5d7",
"/": "40fbcebf68e159b1bdba33f062d7e5d7",
"favicon.png": "2428af5f724dd3374de3718ba29f45a2",
"firebase-messaging-sw.js": "1795bbcc857fb6062f37841341fa0c71",
"main.dart.js": "2475562bf93ab231c36edce863c7108b",
"manifest.json": "7b60c7c7866f307aae5d29ae04feef6b",
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
