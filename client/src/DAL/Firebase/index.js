var config = {
    apiKey: "apiKey",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://coffeeorder-4f01e-default-rtdb.europe-west1.firebasedatabase.app",
    storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
export default database = firebase.database();