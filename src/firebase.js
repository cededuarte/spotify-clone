import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDLDF9vlKFAzBpz3BeAjyRKdmoJ9OlQZJo",
    authDomain: "spotify-clone-b357f.firebaseapp.com",
    projectId: "spotify-clone-b357f",
    storageBucket: "spotify-clone-b357f.appspot.com",
    messagingSenderId: "317222000472",
    appId: "1:317222000472:web:a487db0b14866ed4eab72d",
    measurementId: "G-HPCEP5FNDM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth, provider};
  export default db;