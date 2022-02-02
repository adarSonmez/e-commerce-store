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
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log(user);
  } catch (err) {
    console.error(err);
  }
};

// Listen user's current status.
export const currentUser = (currentUser, setCurrentUser) => {
  onAuthStateChanged(auth, (user) => setCurrentUser(user));
  return currentUser;
};

// Sign up!
export const signUp = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
    return user;
  } catch (err) {
    console.error(err);
  }
};

// Sign in!
export const signIn = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
  } catch (err) {
    console.error(err);
  }
};

// Sign out!
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.error(err);
  }
};
