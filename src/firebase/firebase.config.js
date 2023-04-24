// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO2_3SkPEMw8ezA2IQ89Z0HSeHYAz4m_g",
  authDomain: "dragon-news-cliant.firebaseapp.com",
  projectId: "dragon-news-cliant",
  storageBucket: "dragon-news-cliant.appspot.com",
  messagingSenderId: "89245246861",
  appId: "1:89245246861:web:15f3e2038bc5f6e53309c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app