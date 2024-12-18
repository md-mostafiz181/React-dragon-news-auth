// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl1y7hEwzPXIvvTClO5lAxszdf8SuxP5A",
  authDomain: "react-dragon-news-auth-9cb05.firebaseapp.com",
  projectId: "react-dragon-news-auth-9cb05",
  storageBucket: "react-dragon-news-auth-9cb05.firebasestorage.app",
  messagingSenderId: "78241032259",
  appId: "1:78241032259:web:f323980db8f7be3b830cf6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;