 import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyBdHkQHXBe9oNu0ba5Fi8QGodTh0pFc9CU",
  authDomain: "project60-40ca4.firebaseapp.com",
  databaseURL: "https://project60-40ca4-default-rtdb.firebaseio.com",
  projectId: "project60-40ca4",
  storageBucket: "project60-40ca4.appspot.com",
  messagingSenderId: "624017872854",
  appId: "1:624017872854:web:4cc395524b20a7f2e97677"
};
firebase.initializeApp(firebaseConfig)
  export default firebase.database()
 

  