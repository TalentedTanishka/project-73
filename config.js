import firebase from 'firebase' 
require('@firebase/firestore')
const firebaseConfig = {
  apiKey: "AIzaSyBjMBcOdNGtTFkXF70fxK1AsgLoJwtZpoQ",
  authDomain: "story-hub-30e16.firebaseapp.com",
  projectId: "story-hub-30e16",
  storageBucket: "story-hub-30e16.appspot.com",
  messagingSenderId: "8098595842",
  appId: "1:8098595842:web:9c82520abeb13194ff531b"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();