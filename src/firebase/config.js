// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwsst7sR5N2CdKHYy9Di_DGdekhcBgU5o",
  authDomain: "sancristobalviajes-utn.firebaseapp.com",
  projectId: "sancristobalviajes-utn",
  storageBucket: "sancristobalviajes-utn.appspot.com",
  messagingSenderId: "535855556267",
  appId: "1:535855556267:web:b73758b7908e1fa08739ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initfirebase = () => app