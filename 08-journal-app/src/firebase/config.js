// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDSKfGOiAG_pW_WoHwOcwCy0XY5yx-V3gI",
  authDomain: "react-cursos-f9001.firebaseapp.com",
  projectId: "react-cursos-f9001",
  storageBucket: "react-cursos-f9001.appspot.com",
  messagingSenderId: "346451029153",
  appId: "1:346451029153:web:644f2de0f32b356a0e14e0"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );