self.addEventListener("install", (event) => {
  console.log("Service Worker 설치됨");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});