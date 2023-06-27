import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: "reactpoc-bef9e.firebaseapp.com",
  projectId: "reactpoc-bef9e",
  storageBucket: "reactpoc-bef9e.appspot.com",
  messagingSenderId: "378912348324",
  appId: "1:378912348324:web:17d8aed4f1eeeb79eb6e31",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
