workbox.core.setCacheNameDetails({ prefix: "she-leads" });

importScripts("./my-env-vars.js");
importScripts("https://www.gstatic.com/firebasejs/5.6.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.6.0/firebase-messaging.js");

// workbox.precaching.suppressWarnings();
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
      icon: "./icons/android-chrome-192x192.png"
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

workbox.routing.registerRoute(new RegExp("https://firebasestorage.googleapis.com/v0/b/slav1-2a234.appspot.com/.*"), new workbox.strategies.StaleWhileRevalidate());

workbox.routing.registerRoute(
  /\.(?:css|js)$/,
  new workbox.strategies.NetworkFirst({
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
  new workbox.strategies.NetworkFirst({
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
  new RegExp(VUE_APP_API),
  new workbox.strategies.NetworkFirst({
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

// cache fonts
workbox.routing.registerRoute(
  new RegExp("https://fonts.(?:googleapis|gstatic).com/(.*)"),
  new workbox.strategies.CacheFirst({
    cacheName: "fonts.googleapis",
    plugins: []
  }),
  "GET"
);

// cache static fonts
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: "google-fonts-webfonts",
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30
      })
    ]
  })
);

self.addEventListener("message", messageEvent => {
  console.log("message event", messageEvent);
  if (messageEvent.data === "skipWaiting") return self.skipWaiting();
});
