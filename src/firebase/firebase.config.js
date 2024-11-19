// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnSFIGBED3y14l9_s2-qmmE00y8l6DCy8",
  authDomain: "dragon-news-dae75.firebaseapp.com",
  projectId: "dragon-news-dae75",
  storageBucket: "dragon-news-dae75.firebasestorage.app",
  messagingSenderId: "102849219532",
  appId: "1:102849219532:web:21626f7a6c1638a7022b69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;