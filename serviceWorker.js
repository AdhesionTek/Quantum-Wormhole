const staticQuantumWormhole = "quantum-wormhole-v1";
const version = "1.2.0"; // Version for service worker

const assets = [
  // Code Files
  "/",
  "/index.html",
  "/canvas.js",
  "/index.js",
  // Assets
  "/audio/a0.wav",
  "/audio/a1.wav",
  "/audio/a2.wav",
  "/icons/t-icon-x512.png",
  "/icons/t-icon-x192.png",
  "/icons/icon-x512.png",
  "/icons/icon-x192.png",
  // Theme
  "/third-party/materialize/js/materialize.js",
  "/third-party/materialize/css/materialize.css",
  "/third-party/material-webfont/css/materialdesignicons.css",
  "/third-party/material-webfont/fonts/materialdesignicons-webfont.ttf",
  // Localizations
  "/locales/index.mjs",
  "/locales/en/translation.json",
  "/locales/ja/translation.json",
  "/locales/zh/translation.json",
  "/locales/zh-HK/translation.json",
  "/locales/zh-TW/translation.json",
];

self.addEventListener("install", (event) => {
  console.log("Installing...")
  event.waitUntil(
      
      (async() => {
          try {
              cache_obj = await caches.open(cache)
              cache_obj.addAll(caching_files)
          }
          catch{
              console.log("error occured while caching...")
          }
      })()
  )
} )

self.addEventListener("fetch", (fetchEvent) => {
  //console.log("Intercepting fetching request for: "+fetchEvent.request.url);
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((response) => {
      return response || fetch(fetchEvent.request);
    })
  );
});
