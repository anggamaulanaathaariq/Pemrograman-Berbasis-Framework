import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBkeIa7hUy4XvcG8wD4naHk3oE8tVXfbqw",
    authDomain: "fir-listbuku.firebaseapp.com",
    databaseURL: "https://fir-listbuku.firebaseio.com",
    projectId: "fir-listbuku",
    storageBucket: "fir-listbuku.appspot.com",
    messagingSenderId: "530818666212",
    appId: "1:530818666212:web:871c6677e38333aa41a6f1"
  };

  const fire =  firebase.initializeApp(firebaseConfig);
  export default fire;