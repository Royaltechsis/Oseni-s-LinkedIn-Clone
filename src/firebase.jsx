// Import Firebase services using the modular syntax
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyOWX65rsqDlA1rjymedJDIO5FZgHctp4",
  authDomain: "linkedin-clone-d5f4c.firebaseapp.com",
  projectId: "linkedin-clone-d5f4c",
  storageBucket: "linkedin-clone-d5f4c.appspot.com",
  messagingSenderId: "470275038631",
  appId: "1:470275038631:web:0a3f43f6f4b7d48a90ea82",
  measurementId: "G-7FSELHKWY5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore, Auth, Storage, and Google Auth Provider
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
