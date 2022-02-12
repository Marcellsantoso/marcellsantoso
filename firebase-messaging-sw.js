importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js');

firebase.initializeApp = ({
    apiKey: "AIzaSyC8m1io-SLa3NT1Low5gp4yXC1Bd-FiDaI",
    authDomain: "marcel-a7f85.firebaseapp.com",
    projectId: "marcel-a7f85",
    storageBucket: "marcel-a7f85.appspot.com",
    messagingSenderId: "729813865030",
    appId: "1:729813865030:web:6651797080c418f3f63047",
    measurementId: "G-L4QQSYVD2Q"
  });

const messaging = firebase.messaging();