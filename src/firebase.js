import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
} from "firebase/auth";
import Cookies from "js-cookie";
import { setDoc, doc, serverTimestamp, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyBMx26yx6ICUxPwmkDAcsgO2qvMugUCSbo",

  authDomain: "gamify-fitness.firebaseapp.com",

  projectId: "gamify-fitness",

  storageBucket: "gamify-fitness.appspot.com",

  messagingSenderId: "323688820442",

  appId: "1:323688820442:web:cafc9556168fe802f03fe3",

  measurementId: "G-P2X6S0Z3JK"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = async () => {
  try {
    const googleProvider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, googleProvider);

    const accessToken = res.user.accessToken;
    Cookies.set("uat", accessToken);
    const uid = res.user.uid.toString();
    Cookies.set("userID", uid);

    const name = res.user.displayName;
    const email = res.user.email;
    const photo = res.user.photoURL;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("photo", photo);
    const docRef = doc(db, "user", uid);
    await setDoc(docRef, {
      userID: uid,
      timeStamp: serverTimestamp(),
      name: res.user.displayName,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//   Logout Fucntion
export const logout = () => {
  signOut(auth);
  localStorage.clear();

  Cookies.remove("userID");
  Cookies.remove("uat");
};
