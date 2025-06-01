/*// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6Yw15j6Kf0P4OTnW1SJSMvmlaPfnCKW8",
  authDomain: "finance-c6da4.firebaseapp.com",
  projectId: "finance-c6da4",
  storageBucket: "finance-c6da4.firebasestorage.app",
  messagingSenderId: "971653341667",
  appId: "1:971653341667:web:e6c075c110af767a7bc0d6",
  measurementId: "G-94MQXQQJQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6Yw15j6Kf0P4OTnW1SJSMvmlaPfnCKW8",
  authDomain: "finance-c6da4.firebaseapp.com",
  projectId: "finance-c6da4",
  storageBucket: "finance-c6da4.firebasestorage.app",
  messagingSenderId: "971653341667",
  appId: "1:971653341667:web:e6c075c110af767a7bc0d6",
  measurementId: "G-94MQXQQJQC" // Optional
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
