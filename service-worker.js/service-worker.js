// service-worker.js
self.addEventListener("install", (event) => {
    console.log("Service Worker installiert.");
});

self.addEventListener("fetch", (event) => {
    console.log("Anfrage:", event.request.url);
});
