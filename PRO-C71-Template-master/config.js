import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDUAbNbTRO5Yej8AJEcG4_3BbUqIicAsBs",
    authDomain: "e-library-2ed20.firebaseapp.com",
    projectId: "e-library-2ed20",
    storageBucket: "e-library-2ed20.appspot.com",
    messagingSenderId: "839864281477",
    appId: "1:839864281477:web:2351da64b0b1673832bcec"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
