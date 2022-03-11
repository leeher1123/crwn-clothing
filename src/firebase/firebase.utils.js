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

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }); // 실행할 때마다 구글 팝업 실행
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
