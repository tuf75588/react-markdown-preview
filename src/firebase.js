import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAFA40MTaOYM6TdCStU_wuLDIPTM2Nxxgk",
  authDomain: "markdown-preivew-react.firebaseapp.com",
  databaseURL: "https://markdown-preivew-react.firebaseio.com",
  projectId: "markdown-preivew-react",
  storageBucket: "markdown-preivew-react.appspot.com",
  messagingSenderId: "762228938510"
};

firebase.initializeApp(config);
export default firebase.database();
