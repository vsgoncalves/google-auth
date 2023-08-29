// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7c6hY8lgM2CQCMRprGiUeL2N3mSl_Hmg",
  authDomain: "auth-yt-8eafa.firebaseapp.com",
  projectId: "auth-yt-8eafa",
  storageBucket: "auth-yt-8eafa.appspot.com",
  messagingSenderId: "631811391161",
  appId: "1:631811391161:web:39531f6cd8a8a7752a2568"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);