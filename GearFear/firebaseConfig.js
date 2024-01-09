import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyCk8FCn1klxG1vyT5axP3FqhE1JKtvQVKg",
    authDomain: "gearfear-3e9e7.firebaseapp.com",
    projectId: "gearfear-3e9e7",
    storageBucket: "gearfear-3e9e7.appspot.com",
    messagingSenderId: "816982659336",
    appId: "1:816982659336:web:52351a673fbf42a2135cbd"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
//export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const db = getFirestore(FIREBASE_APP);