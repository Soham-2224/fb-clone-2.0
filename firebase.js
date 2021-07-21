import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBSLE5xEtBlwjyPjnDFHrXaaBp1K_wyXXo",
    authDomain: "facebook-clone2-78bbd.firebaseapp.com",
    projectId: "facebook-clone2-78bbd",
    storageBucket: "facebook-clone2-78bbd.appspot.com",
    messagingSenderId: "108250230376",
    appId: "1:108250230376:web:9d0648cae0616edbe1d5dd",
    measurementId: "G-6BQV1GWDTB"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();
const storage = firebase.storage();

export { db, storage };