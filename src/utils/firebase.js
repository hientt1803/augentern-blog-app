// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "augenternblog.firebaseapp.com",
  projectId: "augenternblog",
  storageBucket: "augenternblog.appspot.com",
  messagingSenderId: "676842984139",
  appId: "1:676842984139:web:c47609be4c37b9d6b6814e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
