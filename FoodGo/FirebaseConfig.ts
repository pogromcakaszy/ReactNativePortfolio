// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_v2sdN9zQvNpKe5uxZhmx4d13n241dRk",
  authDomain: "foodgo-a95cd.firebaseapp.com",
  projectId: "foodgo-a95cd",
  storageBucket: "foodgo-a95cd.appspot.com",
  messagingSenderId: "474395322749",
  appId: "1:474395322749:web:a0e3d0608e04d630124414",
  measurementId: "G-1LG8ZHBF0X"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);

const analytics = getAnalytics(FIREBASE_APP);