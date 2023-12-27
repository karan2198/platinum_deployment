// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDwSC3-4HlQpTRvSQRSI_1kQ71AiDQ1J38",
  authDomain: "platinum-9b0e5.firebaseapp.com",
  projectId: "platinum-9b0e5",
  storageBucket: "platinum-9b0e5.appspot.com",
  messagingSenderId: "772278354549",
  appId: "1:772278354549:web:de755d0b4f4537bbf76e3c",
  measurementId: "G-7CBKKQ3MM3"
};




const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


