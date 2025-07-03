// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAj_HFlc4WEAwEt69wIZt0Pcdbo3PpKW3E",
    authDomain: "prueba-firestore-ad01f.firebaseapp.com",
    projectId: "prueba-firestore-ad01f",
    storageBucket: "prueba-firestore-ad01f.firebasestorage.app",
    messagingSenderId: "905013872025",
    appId: "1:905013872025:web:103cb24ab3c9efd657ff08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getDatabase(app)