// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw-wD4OFDy-HG8v8lqRjBUVGR0uovY1vg",
  authDomain: "netflixgpt-65acf.firebaseapp.com",
  projectId: "netflixgpt-65acf",
  storageBucket: "netflixgpt-65acf.appspot.com",
  messagingSenderId: "121976665735",
  appId: "1:121976665735:web:d7c472fb5865aee6df2a22",
  measurementId: "G-P4QLNQ4071"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);