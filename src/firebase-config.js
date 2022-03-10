// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABk8kKQ9hTj4IVteXM4Hie59Q53id4JAo",
  authDomain: "fir-tutorial-9ef3b.firebaseapp.com",
  projectId: "fir-tutorial-9ef3b",
  storageBucket: "fir-tutorial-9ef3b.appspot.com",
  messagingSenderId: "664370657455",
  appId: "1:664370657455:web:9213fce932f26e1815fc5a",
  measurementId: "G-WPD1HNCG48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
