import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAZHITcUvXpGfwGUd5GilicC5So43YjlHg',
  authDomain: 'trelloc-dev.firebaseapp.com',
  projectId: 'trelloc-dev',
  storageBucket: 'trelloc-dev.appspot.com',
  messagingSenderId: '944136083885',
  appId: '1:944136083885:web:f87ce67ddad8850affa924',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const authDomain = firebaseConfig.authDomain;
