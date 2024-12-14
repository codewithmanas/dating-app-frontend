// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC-PyRiPsJFbmSaLcIERTUFcZGhxnv-4c",
  authDomain: "dating-app-frontend-944b8.firebaseapp.com",
  projectId: "dating-app-frontend-944b8",
  storageBucket: "dating-app-frontend-944b8.firebasestorage.app",
  messagingSenderId: "895814901454",
  appId: "1:895814901454:web:ed6e366c2fb1c579727a9f"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);



