import firebase from "firebase/app";
import "firebase/messaging";

const config = {
  apiKey: "AIzaSyDli2P_zbZNQqBy4gnEuYUgR4US-eu0f2g",
  authDomain: "slav1-2a234.firebaseapp.com",
  databaseURL: "https://slav1-2a234.firebaseio.com",
  projectId: "slav1-2a234",
  storageBucket: "slav1-2a234.appspot.com",
  messagingSenderId: "325247363871",
  appId: "1:325247363871:web:07e647b7e97bc90b015e2a",
  measurementId: "G-0R6C4TLJGL"
};

firebase.initializeApp(config);

let messaging = "";

if (firebase.messaging().isSupported()) {
  messaging = firebase.messaging();
}
navigator.serviceWorker.register(`${process.env.BASE_URL}service-worker.js`).then(reg => {
  messaging.useServiceWorker(reg);
});

export default {
  messaging
};
