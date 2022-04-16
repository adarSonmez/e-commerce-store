import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  addDoc,
  setDoc,
  deleteDoc,
} from 'firebase/firestore';

// Get firestore database
const db = getFirestore();

// Get all documents in a collection
export const getAllDocuments = async (colName, callback) => {
  try {
    const colRef = collection(db, colName);
    onSnapshot(colRef, (snapshot) => callback(snapshot));
    // or: return getDocs(colRef);
  } catch (err) {
    console.error(err);
  }
};

// Get a single document by ID (real time update with onSnapshot)
export const getDocByID = async (colName, userAuth, callback) => {
  const docRef = doc(db, colName, userAuth.uid);

  onSnapshot(docRef, (snapshot) => callback(snapshot));
  // Other ways to fetch data from database (not live)
  // 1) return getDoc(docRef).then( ... )
  // 2) fetch(url).then(r => r.json).then( ... )
};

// Delete a document by ID
export const deleteDocByID = async (colName, id) => {
  try {
    const docRef = doc(db, colName, id);
    await deleteDoc(docRef);
  } catch (err) {
    console.error(err);
  }
};

// Add a document to specified collection (if not exist create a collection)
export const addDocToCollection = async (colName, objectToAdd) => {
  try {
    const colRef = collection(db, colName);
    await addDoc(colRef, objectToAdd);
  } catch (err) {
    console.error(err);
  }
};

// Create user profile, and save in firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
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
