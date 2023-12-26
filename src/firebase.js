// firebase.js
import firebase from 'firebase/app';
import 'firebase/auth'; // Make sure to import the auth module if you plan to use Firebase Authentication


const firebaseConfig = {
  apiKey: "AIzaSyApljDI64dVpozibgB65xRoVUAjVFsTUZU",
  authDomain: "platinumcircle-d856b.firebaseapp.com",
  projectId: "platinumcircle-d856b",
  storageBucket: "platinumcircle-d856b.appspot.com",
  messagingSenderId: "53471314129",
  appId: "1:53471314129:web:e8fcc153e74c14b58645f0",
  measurementId: "G-6GBP436G2C"
};




// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;



