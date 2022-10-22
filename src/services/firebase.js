// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  setDoc,
  doc,
  Timestamp,
} from "firebase/firestore/lite";

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
  const listData = snapshot.docs.map((doc) => {
    const temp = doc.data();
    temp.firestoreId = doc.id;
    return { ...temp };
  });
  return listData;
}

export async function queryData(name, whereString, condition, value) {
  const q = query(collection(db, name), where(whereString, condition, value));
  const querySnapshot = await getDocs(q);
  const listData = [];

  querySnapshot.forEach((doc) => {
    const temp = doc.data();
    temp.firestoreId = doc.id;
    listData.push({ ...temp });
  });

  return listData;
}

export async function registerInformation(payload) {
  const { name, phone, email, type, reason, level } = payload;
  const col = collection(db, "register");

  const result = await setDoc(doc(col), {
    name,
    phone,
    email,
    type,
    reason,
    level,
    createdAt: new Timestamp().toMillis(),
    stringDate: new Date(new Timestamp().toMillis()).format(
      "dd/MM/yyyy HH:mm:ss:SSS"
    ),
  });
  return result;
}
