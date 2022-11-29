import firebase from 'firebase/app';
import 'firebase/firestore';
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyBAWe0DiP_9vuQzHKBpBGWbgzxFrja2aMs",
    authDomain: "weatherapp-a5315.firebaseapp.com",
    projectId: "weatherapp-a5315",
    storageBucket: "weatherapp-a5315.appspot.com",
    messagingSenderId: "436603179265",
    appId: "1:436603179265:web:a44aac6517d92e6d6e0b00"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  export default app.firestore();