// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOEfHOt4Ap40jsHyTugbC0F5Py6lQtwg8",
  authDomain: "coffee-store-cee9a.firebaseapp.com",
  projectId: "coffee-store-cee9a",
  storageBucket: "coffee-store-cee9a.firebasestorage.app",
  messagingSenderId: "457185444596",
  appId: "1:457185444596:web:c2eeaeeff0b9cd6a2794a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);