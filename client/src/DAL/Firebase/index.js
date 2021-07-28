import firebase from 'firebase/app';
import "firebase/database";
import "firebase/storage";


var config = {
    apiKey: "AIzaSyCrrzay9q_ebYMNUv3PvZFkbH0QjJNuGcM",
    authDomain: "coffeeorder-4f01e.firebaseapp.com",
    databaseURL: "https://coffeeorder-4f01e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "coffeeorder-4f01e",
    storageBucket: "coffeeorder-4f01e.appspot.com",
    messagingSenderId: "147709475008",
    appId: "1:147709475008:web:6931eaacdab46d56c51525"
};

firebase.initializeApp(config);

export const database = firebase.database();

export const storage = firebase.storage();