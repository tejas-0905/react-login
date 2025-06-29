// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ add this

const firebaseConfig = {
  apiKey: "AIzaSyAuAf-HZmEFqdfYG2K8CrnQKzXSDNoXn_k",
  authDomain: "login-page-7be72.firebaseapp.com",
  projectId: "login-page-7be72",
  storageBucket: "login-page-7be72.firebasestorage.app",
  messagingSenderId: "980876267918",
  appId: "1:980876267918:web:fda61d05a1a75620b8d4df",
  measurementId: "G-GDTVJTR28Y"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app); // ✅ export Firestore DB

export { auth, db };
