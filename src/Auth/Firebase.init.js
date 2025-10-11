// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdx_2WG9TmxS0px3t_1AdSE8lkLaSdx30",
  authDomain: "coffee-store-client-8e10f.firebaseapp.com",
  projectId: "coffee-store-client-8e10f",
  storageBucket: "coffee-store-client-8e10f.firebasestorage.app",
  messagingSenderId: "1003107512835",
  appId: "1:1003107512835:web:a6ac4870aca7a9cf7fd436"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);