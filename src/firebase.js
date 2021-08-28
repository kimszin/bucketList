import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB97uCMyIGV-YYejZrFvH2iLMnodBQpPSc",
    authDomain: "sparta-react-f1ebc.firebaseapp.com",
    projectId: "sparta-react-f1ebc",
    storageBucket: "sparta-react-f1ebc.appspot.com",
    messagingSenderId: "160188775786",
    appId: "1:160188775786:web:f907288257877eeca97913",
    measurementId: "G-4995030EN5"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export {firestore};