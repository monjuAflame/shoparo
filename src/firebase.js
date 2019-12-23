  import firebase from '@firebase/app';
  import 'firebase/auth'
  require("firebase/firestore");

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD6PXqTeriSH6SN_fttvxdFRaCRv4RgEzQ",
    authDomain: "vue-shop-bbe53.firebaseapp.com",
    databaseURL: "https://vue-shop-bbe53.firebaseio.com",
    projectId: "vue-shop-bbe53",
    storageBucket: "vue-shop-bbe53.appspot.com",
    messagingSenderId: "692614703959",
    appId: "1:692614703959:web:f84015af8f75027f1e2c12"
  };
  // Initialize Firebase
  // export const fb = firebase.initializeApp(firebaseConfig);
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export {fb,db}
