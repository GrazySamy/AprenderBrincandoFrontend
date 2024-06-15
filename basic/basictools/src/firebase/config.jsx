import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider, getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDqOcOzCnOr3RNdeIV8rQ48l1WT8yUwDkY",
  authDomain: "aprenderbrincandofrontend.firebaseapp.com",
  projectId: "aprenderbrincandofrontend",
  storageBucket: "aprenderbrincandofrontend.appspot.com",
  messagingSenderId: "233591297522",
  appId: "1:233591297522:web:9ace5b426836bbcd15476b"
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();

export { db, googleProvider, auth }

