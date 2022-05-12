// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHWA6QJVZsR-Zfm0QtKGyzJFZqrYeFt4g",
  authDomain: "doctorsportal-243e2.firebaseapp.com",
  projectId: "doctorsportal-243e2",
  storageBucket: "doctorsportal-243e2.appspot.com",
  messagingSenderId: "1051531628627",
  appId: "1:1051531628627:web:d4315e43ff931d186ef6a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
