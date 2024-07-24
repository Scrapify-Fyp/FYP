import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBUc5GjfFjeu8GUr8mFXH1SOtXXJ4IFs5E",
  authDomain: "scapify-f6fe7.firebaseapp.com",
  projectId: "scapify-f6fe7",
  storageBucket: "scapify-f6fe7.appspot.com",
  messagingSenderId: "785157399649",
  appId: "1:785157399649:web:049f29dffd679332fb7620",
  measurementId: "G-29JMNL241G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, db, storage };
