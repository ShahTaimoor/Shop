
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBhFY3ASCg5Cir2DRWhSwcQ6Im3riZE5YU",
  authDomain: "shop1-48c84.firebaseapp.com",
  projectId: "shop1-48c84",
  storageBucket: "shop1-48c84.appspot.com",
  messagingSenderId: "82991266168",
  appId: "1:82991266168:web:9914f6fb7ca1daacb4b08d",
  measurementId: "G-S3RKMEHZ5B"
};


const app = initializeApp(firebaseConfig);
export default app