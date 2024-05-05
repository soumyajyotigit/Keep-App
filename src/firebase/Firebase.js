// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqBmSh0kmXgD1IR9WysQHinx_l9JwNiwQ",
  authDomain: "cybernetic-song-315816.firebaseapp.com",
  projectId: "cybernetic-song-315816",
  storageBucket: "cybernetic-song-315816.appspot.com",
  messagingSenderId: "836955236060",
  appId: "1:836955236060:web:d0b3f90cad49b77b20b619",
  measurementId: "G-B3QZZ8V9G2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
export {auth};
const analytics = getAnalytics(app);