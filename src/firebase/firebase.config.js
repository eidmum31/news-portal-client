// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKp-WjtM1bK6JA6JsfdVQuLQsZ0ccodZY",
  authDomain: "the-news-dragon-ff7af.firebaseapp.com",
  projectId: "the-news-dragon-ff7af",
  storageBucket: "the-news-dragon-ff7af.appspot.com",
  messagingSenderId: "424069978306",
  appId: "1:424069978306:web:25d8b2969d74890759435b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;