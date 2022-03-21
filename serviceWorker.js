const staticQuantumWormhole = "quantum-wormhole-v1"
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
    "https://media.githubusercontent.com/media/Danmaku-Big-Big-War/Danmaku-Big-Big-War/main/GitHubFiles/GameIcon.png",
    // Theme
    "/materialize/js/materialize.js",
    "/materialize/css/materialize.css",
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