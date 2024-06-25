import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions, httpsCallable } from "firebase/functions";
const firebaseConfig = {
  apiKey: "AIzaSyDf8RHayFDy3Sg2qstAWydJm0EUrPu5Df4",
  authDomain: "flipside-c386e.firebaseapp.com",
  projectId: "flipside-c386e",
  storageBucket: "flipside-c386e.appspot.com",
  messagingSenderId: "357798347560",
  appId: "1:357798347560:web:8775b576e1c423348b461d",
  measurementId: "G-G8D8WL4767",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);
