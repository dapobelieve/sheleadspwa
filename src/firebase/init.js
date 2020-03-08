import firebase from 'firebase/app'
import 'firebase/auth'

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyBt-_JU0-UoaKa-RXobOOSL6FDPduBYwS0",
  authDomain: "sheleads-c4b9c.firebaseapp.com",
  databaseURL: "https://sheleads-c4b9c.firebaseio.com",
  projectId: "sheleads-c4b9c",
  storageBucket: "sheleads-c4b9c.appspot.com",
  messagingSenderId: "466142964221",
  appId: "1:466142964221:web:2589a768cbb15460aad194"
  };

firebase.initializeApp(firebaseConfig)
