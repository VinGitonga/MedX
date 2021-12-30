// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1RX3RQHQQaIEPO8jUZut9HAs6L0GmCjc",
    authDomain: "medx-fab9e.firebaseapp.com",
    projectId: "medx-fab9e",
    storageBucket: "medx-fab9e.appspot.com",
    messagingSenderId: "608988913949",
    appId: "1:608988913949:web:780332a39fafe1393e81f4"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)
const storage = getStorage()

export { app, db, storage }