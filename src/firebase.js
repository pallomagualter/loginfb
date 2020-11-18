import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyANfglBC8rt_sYCgJ0H18QyTRex_QK--1M",
    authDomain: "log-in-prffrota.firebaseapp.com",
    databaseURL: "https://log-in-prffrota.firebaseio.com",
    projectId: "log-in-prffrota",
    storageBucket: "log-in-prffrota.appspot.com",
    messagingSenderId: "835738764351",
    appId: "1:835738764351:web:0814388ab6a57576ad648a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;