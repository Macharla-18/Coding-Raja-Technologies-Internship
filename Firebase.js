let firebaseConfig = {
    apiKey: "AIzaSyB2v7aek6JZwU9t2vvfqlvMHKCDllzXPNQ",
    authDomain: "blogging-website-76527.firebaseapp.com",
    projectId: "blogging-website-76527",
    storageBucket: "blogging-website-76527.appspot.com",
    messagingSenderId: "646884758823",
    appId: "1:646884758823:web:05141ebce1f64f46880502"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();