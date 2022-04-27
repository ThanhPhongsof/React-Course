// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC355FgwykDKntB_YGE6tMUu9vuh2xR9gM",
  authDomain: "learn-firebase-14a19.firebaseapp.com",
  projectId: "learn-firebase-14a19",
  storageBucket: "learn-firebase-14a19.appspot.com",
  messagingSenderId: "687668366156",
  appId: "1:687668366156:web:1a8d11b45bd537e9fe9de9",
  measurementId: "G-VD0FPZ8499",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
