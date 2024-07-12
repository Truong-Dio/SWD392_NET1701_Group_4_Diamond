// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOxTRQAs02eefB4Mtv4EAT8OObSWGl530",
  authDomain: "diamond-f8654.firebaseapp.com",
  projectId: "diamond-f8654",
  storageBucket: "diamond-f8654.appspot.com",
  messagingSenderId: "434749456057",
  appId: "1:434749456057:web:f1c9bd84307a0d5462a568",
  measurementId: "G-HESBPQ31L1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);