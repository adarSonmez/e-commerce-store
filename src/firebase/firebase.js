// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from 'firebase/auth';

// Your web app's Firebase configuration
const config = {
  apiKey: 'AIzaSyCZ92AAgr-A5Srx0HDr-Py2wkCUzKyj8fc',
  authDomain: 'e-commerce-store-63f09.firebaseapp.com',
  projectId: 'e-commerce-store-63f09',
  storageBucket: 'e-commerce-store-63f09.appspot.com',
  messagingSenderId: '93740738864',
  appId: '1:93740738864:web:d1a9709e054d0b861c00f5',
  measurementId: 'G-5Z88EJX8M5',
};

// Initialize Firebase
initializeApp(config);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const firestore = getFirestore();

// Sign in with Google Popup
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
    })
    .catch((error) => GoogleAuthProvider.credentialFromError(error));

// Listen user's current status.
export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
};

// Sign up!
export const signUp = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password);
};

// Sign in!
export const signIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};

// Sign out!
export const logout = () => {
  signOut(auth);
};
