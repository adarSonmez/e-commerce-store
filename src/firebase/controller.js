import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  addDoc,
  setDoc,
  getDocs,
} from 'firebase/firestore';

// Get firestore database
const db = getFirestore();

// Add documents to specified collection (if not exist create a collection)
export const addDocumentsToCollection = async (colName, objectToAdd) => {
  try {
    const colRef = collection(db, colName);
    await addDoc(colRef, objectToAdd);
  } catch (err) {
    console.error(err);
  }
};

// Get all documents in a collection
export const getAllDocuments = async (colName) => {
  try {
    const colRef = collection(db, colName);
    return await getDocs(colRef);
  } catch (err) {
    console.error(err);
  }
};

// Get a single document by ID (real time update with onSnapshot)
export const getDocByID = async (colName, userAuth, callback) => {
  const docRef = doc(db, colName, userAuth.uid);

  onSnapshot(docRef, (doc, id) => {
    let userData = { ...doc.data(), id: doc.id };
    callback({
      userAuth: userAuth,
      userInfo: userData,
    });
  });
};

// Create user profile, and save in firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const docRef = doc(db, 'users', await userAuth.uid);
  const { email, displayName } = await userAuth;

  if (displayName) {
    try {
      await setDoc(docRef, {
        name: displayName,
        email,
        createdAt: new Date().toUTCString(),
      });
    } catch (error) {
      console.error(error);
    }
  } else {
    try {
      await setDoc(docRef, {
        email,
        createdAt: new Date().toUTCString(),
        ...additionalData,
      });
    } catch (error) {
      console.error(error);
    }
  }
};
