// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { logEvent } from "firebase/analytics";

// After user logs in or signs up
logEvent(analytics, "login", { method: "email" });

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZkbZzte1F8_kITyDjFXoJCT29A5kCg1w",
  authDomain: "netflixgpt-vedant.firebaseapp.com",
  projectId: "netflixgpt-vedant",
  storageBucket: "netflixgpt-vedant.firebasestorage.app",
  messagingSenderId: "414676224978",
  appId: "1:414676224978:web:c8a9a6c56abce7f84d960b",
  measurementId: "G-QEL3ZSR2B9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
