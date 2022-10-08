// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC64sdqJ3GiuiTmA2kYtUFeD_56Isp1nzY",
  authDomain: "cherubim-b385d.firebaseapp.com",
  projectId: "cherubim-b385d",
  storageBucket: "cherubim-b385d.appspot.com",
  messagingSenderId: "705281828571",
  appId: "1:705281828571:web:de65edd5a62efa0d27cefe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
export async function getData(name) {
  const col = collection(db, name);
  const snapshot = await getDocs(col);
  const listData = snapshot.docs.map((doc) => doc.data());
  return listData;
}
