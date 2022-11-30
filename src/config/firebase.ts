// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdFw8SFSfGwmm3S5CBX5nFi7KMxd8GyyQ",
  authDomain: "pedro-app-8bd3b.firebaseapp.com",
  projectId: "pedro-app-8bd3b",
  storageBucket: "pedro-app-8bd3b.appspot.com",
  messagingSenderId: "679821378683",
  appId: "1:679821378683:web:54f00cc4f7433907150ede",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
