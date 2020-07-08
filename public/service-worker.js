workbox.core.setCacheNameDetails({ prefix: "she-leads" });

importScripts("https://www.gstatic.com/firebasejs/5.6.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.6.0/firebase-messaging.js");

workbox.precaching.suppressWarnings();
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

const { CacheableResponse } = workbox.cacheableResponse;
/**
 * Firebase Messaging
 */
firebase.initializeApp({ messagingSenderId: "325247363871" });

if (firebase.messaging.isSupported()) {
  const messaging = firebase.messaging();

  messaging.setBackgroundMessageHandler(async function(payload) {
    let title = payload.data.type;
    switch (title) {
      case "group":
        title = "A new group message";
        break;
    }
    let notificationOptions = {
      body: payload.data.message,
      icon: "./img/sla/192x192.png"
    };

    const clients = await self.clients.matchAll({ type: "window" });
    for (const client of clients) {
      client.postMessage(payload.data);
    }

    return self.registration.showNotification(title, notificationOptions);
  });
}

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

workbox.routing.registerRoute(new RegExp("https://firebasestorage.googleapis.com/v0/b/slav1-2a234.appspot.com/.*"), workbox.strategies.staleWhileRevalidate());

workbox.routing.registerRoute(
  /\.(?:css|js)$/,
  workbox.strategies.networkFirst({
    cacheName: "assets",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 10000,
        maxAgeSeconds: 31536000
      })
    ]
  })
);
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.networkFirst({
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
      new CacheableResponse({
        statuses: [0, 200, 201] // cache every request that returns a 200
      })
    ]
  })
);
// Redirect to index.html if sw cannot find matching route
workbox.routing.registerNavigationRoute("/index.html", {});
workbox.routing.registerRoute(
  new RegExp("https://fonts.(?:googleapis|gstatic).com/(.*)"),
  workbox.strategies.cacheFirst({
    cacheName: "fonts.googleapis",
    plugins: []
  }),
  "GET"
);

self.addEventListener("message", messageEvent => {
  console.log("message event", messageEvent);
  if (messageEvent.data === "skipWaiting") return self.skipWaiting();
});
