// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "car-market-9a487.firebaseapp.com",
  projectId: "car-market-9a487",
  storageBucket: "car-market-9a487.firebasestorage.app",
  messagingSenderId: "391783626519",
  appId: "1:391783626519:web:7b13d66add3208e5afa952",
  measurementId: "G-X7FRNBB58M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);