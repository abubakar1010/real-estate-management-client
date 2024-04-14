// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBRLnlTzQ92HkQdHZxKpoIq8iRy1GI50W8",
  authDomain: "ph-assignment-09-7744b.firebaseapp.com",
  projectId: "ph-assignment-09-7744b",
  storageBucket: "ph-assignment-09-7744b.appspot.com",
  messagingSenderId: "522098580322",
  appId: "1:522098580322:web:4f54f7e5902613acbb2a3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth