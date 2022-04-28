import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

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

// Init services
export const db = getFirestore(app);
export const auth = getAuth(app);
