import firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  // apiKey: "AIzaSyBxwu3htsIEd6zD58xwOYQY5ASVieIzI7s",
  // authDomain: "my-map-7e182.firebaseapp.com",
  // projectId: "my-map-7e182",
  // storageBucket: "my-map-7e182.appspot.com",
  // messagingSenderId: "769250437091",
  // appId: "1:769250437091:web:06a410496f692a8002a2d6",
  // measurementId: "G-8VR3JK1YK3",
  apiKey: "AIzaSyAy-pU5LDKPD0Y8bwC-eDSv2yKqH_BUABA",
  authDomain: "vue-upload-8c02f.firebaseapp.com",
  projectId: "vue-upload-8c02f",
  storageBucket: "vue-upload-8c02f.appspot.com",
  messagingSenderId: "822741079663",
  appId: "1:822741079663:web:17efbd82e283222dc99f9a",
}

firebase.initializeApp(firebaseConfig)
