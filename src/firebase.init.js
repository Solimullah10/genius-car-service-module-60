// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxOfSKIwSa10xDr8zcrEsjFt7H6T1CC94",
    authDomain: "genius-car-services-36c3a.firebaseapp.com",
    projectId: "genius-car-services-36c3a",
    storageBucket: "genius-car-services-36c3a.appspot.com",
    messagingSenderId: "72327230546",
    appId: "1:72327230546:web:f4e3c972f0a39cf9899b8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
