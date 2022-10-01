
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCMmW59_5fuaLmKeiXfLSdqaPadGNYSUYs",
  authDomain: "react-portfolio-bca13.firebaseapp.com",
  projectId: "react-portfolio-bca13",
  storageBucket: "react-portfolio-bca13.appspot.com",
  messagingSenderId: "561093564340",
  appId: "1:561093564340:web:e101570ba1b7b0802b04e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);