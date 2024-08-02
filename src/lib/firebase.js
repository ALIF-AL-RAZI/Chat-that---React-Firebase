import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-that-a9ed9.firebaseapp.com",
  projectId: "chat-that-a9ed9",
  storageBucket: "chat-that-a9ed9.appspot.com",
  messagingSenderId: "846239366856",
  appId: "1:846239366856:web:107b6c0a33362083bbaffd"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();