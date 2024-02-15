// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm_U3n3cRFA3QvM4YXK9z_bIbn6SwALyo",
  authDomain: "auth-b5a09.firebaseapp.com",
  projectId: "auth-b5a09",
  storageBucket: "auth-b5a09.appspot.com",
  messagingSenderId: "165862703043",
  appId: "1:165862703043:web:0b7e3947246cb2089f8776",
  measurementId: "G-STYEDWNPSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const googleAuthProvider = new GoogleAuthProvider;
export const auth = getAuth();