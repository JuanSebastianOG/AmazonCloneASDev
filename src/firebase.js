import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAtjHEoj8dRm_SHWipjl5bbbo-90X6MnqE",
    authDomain: "clone-2df2a.firebaseapp.com",
    databaseURL: "https://clone-2df2a.firebaseio.com",
    projectId: "clone-2df2a",
    storageBucket: "clone-2df2a.appspot.com",
    messagingSenderId: "940039913425",
    appId: "1:940039913425:web:9d75522a15f011967eeaf0",
    measurementId: "G-66VVZFQT1P"
});


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage };