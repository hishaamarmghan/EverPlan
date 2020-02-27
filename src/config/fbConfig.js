import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAPaYF_-rIDXv51qvW8i4OozcW1G02voyE",
    authDomain: "everplan-a342c.firebaseapp.com",
    databaseURL: "https://everplan-a342c.firebaseio.com",
    projectId: "everplan-a342c",
    storageBucket: "everplan-a342c.appspot.com",
    messagingSenderId: "351824213707",
    appId: "1:351824213707:web:a2f878a4e3a3a911bb4d4e",
    measurementId: "G-8B8H2E4S9Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;