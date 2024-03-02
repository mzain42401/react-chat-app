import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyBLN7ctc8s9on_ZhuTbhanRfRIURIOarCc",
  authDomain: "react-chat-app-34d3a.firebaseapp.com",
  databaseURL: "https://react-chat-app-34d3a-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-34d3a",
  storageBucket: "react-chat-app-34d3a.appspot.com",
  messagingSenderId: "106776800678",
  appId: "1:106776800678:web:9c9b22ec3b92c32b30f367",
  measurementId: "G-QYJ80T5N3C"
};


const app = initializeApp(firebaseConfig);
export const data=getDatabase(app)