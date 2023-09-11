importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

/*Update with yours config*/
const firebaseConfig = {
  apiKey: "AIzaSyBgr5pdFKoX0Ekt_FDpyaudLxK9XVUsmj8",
  authDomain: "pips-official.firebaseapp.com",
  projectId: "pips-official",
  storageBucket: "pips-official.appspot.com",
  messagingSenderId: "20388672074",
  appId: "1:20388672074:web:976bc047e46901cdcbacb3",
  measurementId: "G-SG28KW0EBN"
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