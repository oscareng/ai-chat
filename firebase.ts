import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA071l_BSYhfuncDMTBFm7CGYClI0xT7zc",
  authDomain: "ai-chat-379512.firebaseapp.com",
  projectId: "ai-chat-379512",
  storageBucket: "ai-chat-379512.appspot.com",
  messagingSenderId: "100670709280",
  appId: "1:100670709280:web:3ef81d5338aea279b86645",
  measurementId: "G-CQQH5GEH3K",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
