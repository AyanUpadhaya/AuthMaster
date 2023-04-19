// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPg43I9ZAAfwOr8W0_BVcb1Q-dz7XYbvc",
  authDomain: "auth-firebase-daisy.firebaseapp.com",
  projectId: "auth-firebase-daisy",
  storageBucket: "auth-firebase-daisy.appspot.com",
  messagingSenderId: "239410651199",
  appId: "1:239410651199:web:323b57d5b6639237f5588a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);