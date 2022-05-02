// Import the functions you need from the SDKs you need
import 'firebase/firestore';
import 'firebase/auth';
import { initializeApp } from "firebase/app";
import  { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9ppzczAXZWUNVPjgF84LyVNb4FQ-62FE",
  authDomain: "react-journal-app-ee6da.firebaseapp.com",
  projectId: "react-journal-app-ee6da",
  storageBucket: "react-journal-app-ee6da.appspot.com",
  messagingSenderId: "992986189340",
  appId: "1:992986189340:web:5f7c70cae6ab38e48f59d9"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider
}