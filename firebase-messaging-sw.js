importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

   /*Update with yours config*/
  const firebaseConfig = {
    apiKey: "AIzaSyCPEw_dp5Ed5NRs_MC5FKBfN0rTrtm2Vfc",
    authDomain: "pips-demo-app.firebaseapp.com",
    projectId: "pips-demo-app",
    storageBucket: "pips-demo-app.appspot.com",
    messagingSenderId: "595239640103",
    appId: "1:595239640103:web:fed3ab7a7a6bc2a44bc202",
    measurementId: "G-1M8YD1QNH9"
 };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  /*messaging.onMessage((payload) => {
  console.log('Message received. ', payload);*/
  messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });