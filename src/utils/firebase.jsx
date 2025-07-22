// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// ✅ Always initialize app first
// const firebaseConfig = {
//   apiKey: "AIzaSyDZkbZzte1F8_kITyDjFXoJCT29A5kCg1w",
//   authDomain: "netflixgpt-vedant.firebaseapp.com",
//   projectId: "netflixgpt-vedant",
//   storageBucket: "netflixgpt-vedant.firebasestorage.app",
//   messagingSenderId: "414676224978",
//   appId: "1:414676224978:web:c8a9a6c56abce7f84d960b",
//   measurementId: "G-QEL3ZSR2B9",
// };

const firebaseConfig = {
  apiKey: "AIzaSyA1HN_j9TSLrNoWYN7tTGW42vfihV92qQ8",
  authDomain: "moviegpt-vedant.firebaseapp.com",
  projectId: "moviegpt-vedant",
  storageBucket: "moviegpt-vedant.firebasestorage.app",
  messagingSenderId: "1026994678097",
  appId: "1:1026994678097:web:572adf1bd49da1f3d48b70",
  measurementId: "G-FQD12B2GBR",
};

const app = initializeApp(firebaseConfig);

// ✅ Initialize analytics AFTER app
const analytics = getAnalytics(app);

// ✅ Export for usage in other files
export const auth = getAuth();
export { analytics };
