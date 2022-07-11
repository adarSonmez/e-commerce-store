import { User } from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  deleteDoc,
  getDocs,
  getDoc,
} from 'firebase/firestore';

// Get firestore database
const db = getFirestore();

// Get all documents in a collection
export const getAllDocuments = async (colName: string) => {
  try {
    const colRef = collection(db, colName);
    return await getDocs(colRef);
    // or onSnapshot(colRef, (snapshot) => callback(snapshot));
  } catch (err) {
    console.error(err);
  }
};

// Get a single document by ID (real time update with onSnapshot)
export const getDocByID = async (colName: string, userAuth: User) => {
  const docRef = doc(db, colName, userAuth.uid);

  return getDoc(docRef);
  // Other ways to fetch data from database (not live)
  // 1)  onSnapshot(docRef, (snapshot) => callback(snapshot));
  // 2) fetch(url).then(r => r.json).then( ... )
};

// Delete a document by ID
export const deleteDocByID = async (colName: string, id: string) => {
  try {
    const docRef = doc(db, colName, id);
    await deleteDoc(docRef);
  } catch (err) {
    console.error(err);
  }
};

// Add a document to specified collection (if not exist create a collection)
export const addDocToCollection = async (colName: string, objectToAdd: any) => {
  try {
    const colRef = collection(db, colName);
    await addDoc(colRef, objectToAdd);
  } catch (err) {
    console.error(err);
  }
};

type AdditionalUserData = {
  name?: string;
};

export type StoredUser = {
  name: string;
  email: string;
  createdAt: string;
};

// Create user profile, and save in firestore
export const createUserProfileDocument = async <T extends AdditionalUserData>(
  userAuth: User,
  additionalData: T
) => {
  if (!userAuth) return;

  const docRef = doc(db, 'users', userAuth.uid);
  const { email, displayName } = userAuth;

  try {
    await setDoc(docRef, {
      name: displayName ? displayName : additionalData.name,
      email,
      createdAt: new Date().toUTCString(),
    });
  } catch (error) {
    console.error(error);
  }
};
