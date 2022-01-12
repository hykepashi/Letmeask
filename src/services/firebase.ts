import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDR_rsFL7sM7_yRRmXHS3dKfGKOsCqsUyk",
  authDomain: "letmeask-c69ca.firebaseapp.com",
  databaseURL: "https://letmeask-c69ca-default-rtdb.firebaseio.com",
  projectId: "letmeask-c69ca",
  storageBucket: "letmeask-c69ca.appspot.com",
  messagingSenderId: "218323520211",
  appId: "1:218323520211:web:2263690e8bf835709da226",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { auth, database };
