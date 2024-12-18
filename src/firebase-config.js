// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCWUZxRn1kt_1o6uZXzHglCHDNW8lb0Pf8",
//     authDomain: "fb-rest-race.firebaseapp.com",
//     databaseURL: "https://fb-rest-race-default-rtdb.firebaseio.com",
//     projectId: "fb-rest-race",
//     storageBucket: "fb-rest-race.appspot.com",
//     messagingSenderId: "950177214357",
//     appId: "1:950177214357:web:3612a14fba6a7f368f109c"
// };
const firebaseConfig = {
  apiKey: "AIzaSyD_ZU43si1-dSoKM_g3INZuQ3Q5s5OPPI8",
  authDomain: "railfinder-app.firebaseapp.com",
  databaseURL: "https://railfinder-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "railfinder-app",
  storageBucket: "railfinder-app.firebasestorage.app",
  messagingSenderId: "1029492883312",
  appId: "1:1029492883312:web:07f01d448ee7b1485399b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
