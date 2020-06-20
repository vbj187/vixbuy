import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAYDhokpsbUMbZR_NFwlj0V6PHkBdt-40s",
    authDomain: "vixbuy-b0184.firebaseapp.com",
    databaseURL: "https://vixbuy-b0184.firebaseio.com",
    projectId: "vixbuy-b0184",
    storageBucket: "vixbuy-b0184.appspot.com",
    messagingSenderId: "1048841081730",
    appId: "1:1048841081730:web:444ac8ffa3bc985a6f759b",
    measurementId: "G-W0BLRMD0P2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GithubAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;