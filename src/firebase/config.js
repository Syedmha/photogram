import  firebase from 'firebase/app';
import  'firebase/storage';
import  'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCB-qHu9175ag2wirHlGmyiiKIgarpu5Zg",
    authDomain: "syed-firegram.firebaseapp.com",
    projectId: "syed-firegram",
    storageBucket: "syed-firegram.appspot.com",
    messagingSenderId: "81762031557",
    appId: "1:81762031557:web:68ded56da82802a927ddac"
  };
  
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export{projectStorage, projectFirestore, timestamp};