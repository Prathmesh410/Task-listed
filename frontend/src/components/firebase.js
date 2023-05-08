import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBYmi0i1a-sZs9Pg-BK-wsQHmrvbTJuPlU",
  authDomain: "openinapp-cded9.firebaseapp.com",
  projectId: "openinapp-cded9",
  storageBucket: "openinapp-cded9.appspot.com",
  messagingSenderId: "490663713723",
  appId: "1:490663713723:web:b1f22240eb93a9ec03429e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new  GoogleAuthProvider();
export {auth,provider};