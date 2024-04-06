import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVcpyM4wG5EY948KJz4rh9rGxhoZPxJtM",
  authDomain: "disneyplus-clone-f47ae.firebaseapp.com",
  projectId: "disneyplus-clone-f47ae",
  storageBucket: "disneyplus-clone-f47ae.appspot.com",
  messagingSenderId: "411440836369",
  appId: "1:411440836369:web:cf3b075a3b4e955764a6b0",
  measurementId: "G-0D92K63B46",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const dbConfig = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default dbConfig;
