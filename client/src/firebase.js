// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-2ce3c.firebaseapp.com",
    projectId: "mern-estate-2ce3c",
    storageBucket: "mern-estate-2ce3c.appspot.com",
    messagingSenderId: "491135735854",
    appId: "1:491135735854:web:3dcf57e749ead6542967bf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);