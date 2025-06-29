// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuAf-HZmEFqdfYG2K8CrnQKzXSDNoXn_k",
  authDomain: "login-page-7be72.firebaseapp.com",
  projectId: "login-page-7be72",
  storageBucket: "login-page-7be72.firebasestorage.app",
  messagingSenderId: "980876267918",
  appId: "1:980876267918:web:fda61d05a1a75620b8d4df",
  measurementId: "G-GDTVJTR28Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);