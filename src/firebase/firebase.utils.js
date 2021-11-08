import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAMBjEEu9N3483G2jQeGstDV1HGQOWrQLM",
  authDomain: "crwn-db-6f03d.firebaseapp.com",
  projectId: "crwn-db-6f03d",
  storageBucket: "crwn-db-6f03d.appspot.com",
  messagingSenderId: "336051722931",
  appId: "1:336051722931:web:19a6ce32b6df7403b5aec6",
  measurementId: "G-WJ9BC4ZGGM"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email, 
        createdAt, 
        ...additionalData
      })
    } catch(er){
      console.log('error creating user', er.message)
    }
  }

  return userRef;
} 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider).catch(er => console.log(er));

export default firebase;