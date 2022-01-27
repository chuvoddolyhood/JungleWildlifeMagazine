import firebase from "firebase/compat/app";
import "firebase/compat/database";

var firebaseConfig = {
    apiKey: "AIzaSyBcOdnndCmQTj9Yxvsqfk03uTxzIEgKDeM",
  authDomain: "test-f7282.firebaseapp.com",
  databaseURL: "https://test-f7282-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-f7282",
  storageBucket: "test-f7282.appspot.com",
  messagingSenderId: "973047199002",
  appId: "1:973047199002:web:1d350e82f18ad0a97428a3",
  measurementId: "G-VSSYJXG8MT"
};


const fireDb =firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();