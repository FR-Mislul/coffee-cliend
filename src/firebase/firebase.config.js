// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe8KPGxHmFgekvCiyiSK4nfeXlspZqFr8",
  authDomain: "coffees-store.firebaseapp.com",
  projectId: "coffees-store",
  storageBucket: "coffees-store.appspot.com",
  messagingSenderId: "44168387968",
  appId: "1:44168387968:web:945a672c28d26b48b0f565"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;