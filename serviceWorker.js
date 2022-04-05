const staticQuantumWormhole = "quantum-wormhole-v1";
const version = "1.1.4.a"; // Version for service worker

const assets = [
    // Code Files
    "/",
    "/index.html",
    "/canvas.js",
    "/index.js",
    "/localization.js",
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
]

self.addEventListener("install", installEvent => {
    //console.log("Installing...");
    installEvent.waitUntil(
        caches.open(staticQuantumWormhole).then(cache => {
            return cache.addAll(assets);
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    //console.log("Intercepting fetching request for: "+fetchEvent.request.url);
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(response => {
            return response || fetch(fetchEvent.request);
        })
    )
})