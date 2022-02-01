import { useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

// Sign in with Google Popup
export const signInWithGoogle = (callback) =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      callback();
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
export const signUp = (email, password, callback) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(callback())
    .catch((err) => console.log(err.message));
};

// Sign in!
export const signIn = (email, password, callback) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(callback())
    .catch((err) => console.log(err.message));
};

// Sign out!
export const logout = (callback) => {
  signOut(auth)
    .then(callback())
    .catch((err) => console.log(err.message));
};
