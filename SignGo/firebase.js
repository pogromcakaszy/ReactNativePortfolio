import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAeUnhzCMrKnDQEZaUYaliNwt8kViOGSmI",
  authDomain: "signgo-8a2c2.firebaseapp.com",
  projectId: "signgo-8a2c2",
  storageBucket: "signgo-8a2c2.appspot.com",
  messagingSenderId: "502049385914",
  appId: "1:502049385914:web:2f751d3df80d676da50183",
  measurementId: "G-KJRRYT84GC"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);