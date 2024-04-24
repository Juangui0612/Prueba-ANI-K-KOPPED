import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD_i2OTaRf4Umw-01pPTB3g7YeeAWb-NQk",
  authDomain: "entrevista-de3d9.firebaseapp.com",
  projectId: "entrevista-de3d9",
  storageBucket: "entrevista-de3d9.appspot.com",
  messagingSenderId: "31999723177",
  appId: "1:31999723177:web:5d2910d74052347aaf4bb8",
  measurementId: "G-314MSCT43J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export default firestore;