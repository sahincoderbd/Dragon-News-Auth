// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9jHe41XW3cZpjo7NHMr31evaidLKwIT8",
  authDomain: "dragon-news5.firebaseapp.com",
  projectId: "dragon-news5",
  storageBucket: "dragon-news5.firebasestorage.app",
  messagingSenderId: "579005301682",
  appId: "1:579005301682:web:d9a4486399024054361aab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;