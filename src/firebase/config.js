// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const config = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);

// Initialize Firebase
initializeApp(config);
