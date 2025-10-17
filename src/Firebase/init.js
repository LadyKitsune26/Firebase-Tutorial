// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdDRPnRCXrKe8iYDlTo90ncm7tEDTBBWM",
  authDomain: "fir-practice-aaf1c.firebaseapp.com",
  projectId: "fir-practice-aaf1c",
  storageBucket: "fir-practice-aaf1c.firebasestorage.app",
  messagingSenderId: "164463765003",
  appId: "1:164463765003:web:79c2a53c905561afdfc90e",
  measurementId: "G-8BJY03SYJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();