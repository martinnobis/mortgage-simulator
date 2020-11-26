import firebase from "firebase"

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDVUQU9C95Xn-RQJm5AFxeETb8dmJAr5Uw",
    authDomain: "mortgage-simulator.firebaseapp.com",
    databaseURL: "https://mortgage-simulator.firebaseio.com",
    projectId: "mortgage-simulator",
    storageBucket: "mortgage-simulator.appspot.com",
    messagingSenderId: "803889764129",
    appId: "1:803889764129:web:c2a44b50ded1e4780f1060",
    measurementId: "G-8ZF79BK29E"
})

export var db = firebaseApp.firestore()