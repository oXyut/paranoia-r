// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC624VINA9NmDL65hhBTO_zVD9KnFqCjEA",
  authDomain: "database-paranoia-r.firebaseapp.com",
  projectId: "database-paranoia-r",
  storageBucket: "database-paranoia-r.appspot.com",
  messagingSenderId: "966796868468",
  appId: "1:966796868468:web:0b3af49162fd8c4f200a21",
  databaseURL : "https://database-paranoia-r-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

// console.log(db);

export default db;