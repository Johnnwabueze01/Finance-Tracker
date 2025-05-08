import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAEGPwlz23Lf1WzksZ_TvxYoLiWOPzE4J4",
  authDomain: "finance-tracker-e4474.firebaseapp.com",
  projectId: "finance-tracker-e4474",
  storageBucket: "finance-tracker-e4474.firebasestorage.app",
  messagingSenderId: "215241015586",
  appId: "1:215241015586:web:642eff61e3a2daa62e657b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };


