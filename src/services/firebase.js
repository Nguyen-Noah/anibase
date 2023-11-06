import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDFvP4_J_HgmIdf8XzwmvNxVeK3sYW4Oq4",
  authDomain: "anibase-18a12.firebaseapp.com",
  projectId: "anibase-18a12",
  storageBucket: "anibase-18a12.appspot.com",
  messagingSenderId: "939325634143",
  appId: "1:939325634143:web:f1dbe851d32067dc5b8dea",
  measurementId: "G-Y733KW9B14"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

/* google login auth */
const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { auth, provider, storage };
export default db;