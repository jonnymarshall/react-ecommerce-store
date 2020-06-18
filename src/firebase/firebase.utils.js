import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyC6masNOptCjV5Ya472wUhH4uigMr7EdiY",
  authDomain: "crown-db-8ad2c.firebaseapp.com",
  databaseURL: "https://crown-db-8ad2c.firebaseio.com",
  projectId: "crown-db-8ad2c",
  storageBucket: "crown-db-8ad2c.appspot.com",
  messagingSenderId: "594356569129",
  appId: "1:594356569129:web:45382c7ff8df66c9b70838",
  measurementId: "G-J5M1TYTHMP"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase