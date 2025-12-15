// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA2gqvxqLO12p2Y7C8f6c4F3Xlvz4j9Bw",
  authDomain: "auntcass-bakery.firebaseapp.com",
  projectId: "auntcass-bakery",
  storageBucket: "auntcass-bakery.firebasestorage.app",
  messagingSenderId: "604781208668",
  appId: "1:604781208668:web:9bd4049ff587e35eef7299",
  measurementId: "G-2QG6FLY2BN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);