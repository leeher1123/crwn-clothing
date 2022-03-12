import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBqjlRbpL9qkoQ8q9vNdX1P_xEcGCHByoI',
  authDomain: 'crwn-db-556d3.firebaseapp.com',
  projectId: 'crwn-db-556d3',
  storageBucket: 'crwn-db-556d3.appspot.com',
  messagingSenderId: '100311632209',
  appId: '1:100311632209:web:054c0f5181c5d704e22b70',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    // data 존재하지 않으면 새로운 data 생성
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.log('error creating user', e.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }); // 실행할 때마다 구글 팝업 실행
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
