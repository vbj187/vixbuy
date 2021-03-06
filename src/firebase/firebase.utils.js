import firebase from 'firebase/app';
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;