// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBvnFPyUKirJCHszjIgRWh_tBfYqvt0Ok",
  authDomain: "nexora-fb7c6.firebaseapp.com",
  projectId: "nexora-fb7c6",
  storageBucket: "nexora-fb7c6.firebasestorage.app",
  messagingSenderId: "399099495512",
  appId: "1:399099495512:web:46af1e4cea301a150e362d",
  measurementId: "G-09CDHP35KF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);