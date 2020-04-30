import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyBoHnPLHUzd39jlc55yCrI4m1CdRFJCYBU",
    authDomain: "epilogue-20ebe.firebaseapp.com",
    databaseURL: "https://epilogue-20ebe.firebaseio.com",
    projectId: "epilogue-20ebe",
    storageBucket: "epilogue-20ebe.appspot.com",
    messagingSenderId: "496723987798",
    appId: "1:496723987798:web:6b02e225c79ae1cf475af7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;