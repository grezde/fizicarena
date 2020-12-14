import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCuh7gNGyFscdq58upMQCLiJHNPl9TZG2A",
  authDomain: "physicsarena-2c4f9.firebaseapp.com",
  databaseURL: "https://physicsarena-2c4f9.firebaseio.com",
  projectId: "physicsarena-2c4f9",
  storageBucket: "physicsarena-2c4f9.appspot.com",
  messagingSenderId: "878582606060",
  appId: "1:878582606060:web:1c6d6bab58b3865d751dc9",
  measurementId: "G-KD2DXPZHFP"
});

firebase.analytics();

export default firebase;
