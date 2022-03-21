const staticQuantumWormhole = "quantum-wormhole-v1"
const assets = [
  "/",
  "/index.html",
  "/canvas.js",
  "/audio/a0.wav",
  "/audio/a1.wav",
  "/audio/a2.wav",
  "/materialize/js/materialize.min.js",
  "/materialize/css/materialize.min.css",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticQuantumWormhole).then(cache => {
      cache.addAll(assets)
    })
  )
})