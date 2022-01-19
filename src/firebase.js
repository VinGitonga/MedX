// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDoLDij2Y2OPZPLgDQfHV1AADHFI8jISxg",
    authDomain: "medx-pro-34a1c.firebaseapp.com",
    projectId: "medx-pro-34a1c",
    storageBucket: "medx-pro-34a1c.appspot.com",
    messagingSenderId: "1021714847630",
    appId: "1:1021714847630:web:bbc89c77b9632502f336df"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)
const storage = getStorage()
const auth = getAuth(app)

export { app, db, storage, auth }