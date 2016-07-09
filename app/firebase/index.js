import firebase from 'firebase/firebase-browser';

try {
  var config = {
     apiKey: process.env.API_KEY,
     authDomain: process.env.AUTH_DOMAIN,
     databaseURL: process.env.DATABASE_URL,
     storageBucket: process.env.STORAGE_BUCKET
   };

  firebase.initializeApp(config);
} catch(e) {
  console.log(e);
}

export var firebaseRef = firebase.database().ref();
export default firebase;
