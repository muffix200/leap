import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDhueJqmPqJfipi2OzowuLMmCY3QhZyt1I",
  authDomain: "leap-ef84f.firebaseapp.com",
  databaseURL: "https://leap-ef84f-default-rtdb.firebaseio.com",
  projectId: "leap-ef84f",
  storageBucket: "leap-ef84f.appspot.com",
  messagingSenderId: "115903676241",
  appId: "1:115903676241:web:09506977df67c1cb485d70",
  measurementId: "G-V8ZFGMFY9D",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
