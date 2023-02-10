// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvlxZ8AXNXH_GuSp4BphWCvFhD7jM41FM",
  authDomain: "elaqub.firebaseapp.com",
  projectId: "elaqub",
  storageBucket: "elaqub.appspot.com",
  messagingSenderId: "1059630824524",
  appId: "1:1059630824524:web:184d7a7a16d066d89848e9",
  measurementId: "G-MWLYHEGFET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

