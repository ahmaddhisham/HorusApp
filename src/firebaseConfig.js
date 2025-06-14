// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBstvqtD_2Hs8CX7Svo8IsSbA_IyDa_Zbs",
  authDomain: "horus-b4a2c.firebaseapp.com",
  projectId: "horus-b4a2c",
  storageBucket: "horus-b4a2c.firebasestorage.app",
  messagingSenderId: "274909491899",
  appId: "1:274909491899:web:7d44df88bc34db1383ef9e",
  measurementId: "G-JLZKK1H8QQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Export auth for use in other files
export default app; // Optional: Export app if needed elsewhere