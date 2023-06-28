// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7mQJ60J3KMnHs2HsOKoRZieirt0bH_E0",
    authDomain: "dont-forget-apli.firebaseapp.com",
    projectId: "dont-forget-apli",
    storageBucket: "dont-forget-apli.appspot.com",
    messagingSenderId: "161183558472",
    appId: "1:161183558472:web:2f5b76e3ad1968fbcb217d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
