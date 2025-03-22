// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0tzC0RCuwXq9JuDqBxI6A1ezqjsXjDvk",
  authDomain: "lms-se-fe760.firebaseapp.com",
  projectId: "lms-se-fe760",
  storageBucket: "lms-se-fe760.firebasestorage.app",
  messagingSenderId: "918042822312",
  appId: "1:918042822312:web:3df3d647c7c275c6bee49d",
  measurementId: "G-Q0XQNWVX65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);