// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC4JGFScckvCFl-ER5P2M2CNUeXnbppUw",
  authDomain: "dollarclothes-a9e12.firebaseapp.com",
  projectId: "dollarclothes-a9e12",
  storageBucket: "dollarclothes-a9e12.appspot.com",
  messagingSenderId: "235297730782",
  appId: "1:235297730782:web:cd2cbdaedcf6d6dd2a124f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
