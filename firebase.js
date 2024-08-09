// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJjV67yqPJzkDCZfBYcUBEE0tGmdmm5v0",
  authDomain: "inventory-management-app-b857d.firebaseapp.com",
  projectId: "inventory-management-app-b857d",
  storageBucket: "inventory-management-app-b857d.appspot.com",
  messagingSenderId: "670041464007",
  appId: "1:670041464007:web:247e04d6d27b8304edf2e2",
  measurementId: "G-B637W0NTPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);