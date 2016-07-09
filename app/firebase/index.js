import firebase from 'firebase/firebase-browser';

try {
  var config = {
     apiKey: "AIzaSyC0jjU8Tj9r83Tccvt1_WMdDmrQ4Jt3sXc",
     authDomain: "zeinu-todo.firebaseapp.com",
     databaseURL: "https://zeinu-todo.firebaseio.com",
     storageBucket: "zeinu-todo.appspot.com",
   };

  firebase.initializeApp(config);
} catch(e) {
  console.log(e);
}

export var firebaseRef = firebase.database().ref();
export default firebase;
