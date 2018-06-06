const firebase = require('firebase')

firebase.initializeApp({
  apiKey: "AIzaSyAAJFbSo4XV-HgdxhN3MO-raGaVLt4hwYI",
  authDomain: "pre-course.firebaseapp.com",
  databaseURL: "https://pre-course.firebaseio.com",
  projectId: "pre-course",
  storageBucket: "pre-course.appspot.com",
  messagingSenderId: "486007426512"
})

export default firebase