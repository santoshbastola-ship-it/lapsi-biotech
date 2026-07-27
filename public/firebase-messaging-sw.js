importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAd0eLnE-1scmZ5ZNTtx43QrhW2tfvr-ew",
    authDomain: "lapsi-biotech.firebaseapp.com",
    projectId: "lapsi-biotech",
    storageBucket: "lapsi-biotech.firebasestorage.app",
    messagingSenderId: "812389344235",
    appId: "1:812389344235:web:024161c6378fc972d5efae",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/icons/icon-192x192.png',
        data: payload.data
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
