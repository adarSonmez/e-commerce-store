import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';

// Get firestore database
const db = getFirestore();

// Add a document to firestore
export const addDocument = async (colName, docObject, callback) => {
  try {
    const colRef = collection(db, colName);
    await addDoc(colRef, {
      ...docObject,
      createdAt: serverTimestamp(),
    });
    await callback();
  } catch (err) {
    console.error(err);
  }
};

// Delete a document from firestore
export const deleteDocumentByID = async (colName, docID, callback) => {
  try {
    const docRef = doc(db, colName, docID);

    await deleteDoc(docRef);
    await callback();
  } catch (err) {
    console.err(err);
  }
};

// Update a document in firestore
export const UpdateDocumentByID = async (colName, docID, newDoc, callback) => {
  try {
    const docRef = doc(db, colName, docID);

    await updateDoc(docRef, newDoc);
    await callback();
  } catch (err) {
    console.err(err);
  }
};

// Get a single document by ID (real time update)
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
