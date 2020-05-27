workbox.core.setCacheNameDetails({ prefix: "she-leads" });
/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
  /\.(?:css|js)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: "assets",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 1000,
        maxAgeSeconds: 31536000
      })
    ]
  })
);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: "image-cache",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 17 * 24 * 60 * 60
      })
    ]
  })
);

//cache api route

workbox.routing.registerRoute(
  new RegExp("https://sla-be.herokuapp.com/api/v1"),
  workbox.strategies.networkFirst({
    cacheName: "api-cache",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200]
      })
    ]
  })
);

// Redirect to index.html if sw cannot find matching route
workbox.routing.registerNavigationRoute("/index.html", {
  /* Do not redirect routes used by firebase auth  */
  blacklist: [
    new RegExp("/__/auth/handler"),
    new RegExp("/__/auth/iframe"),
    new RegExp("/.well-known")
  ]
});

workbox.routing.registerRoute(
  new RegExp("https://fonts.(?:googleapis|gstatic).com/(.*)"),
  workbox.strategies.cacheFirst({
    cacheName: "fonts.googleapis",
    plugins: []
  }),
  "GET"
);

addEventListener("message", messageEvent => {
  console.log("message event", messageEvent);
  if (messageEvent.data === "skipWaiting") return self.skipWaiting();
});
