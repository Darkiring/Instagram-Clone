import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBMbtbj5T_AF235ePQE9uWQ74m5YHxO8t4',
  authDomain: 'instagram-clone-5f2e3.firebaseapp.com',
  databaseURL: 'https://instagram-clone-5f2e3.firebaseio.com',
  projectId: 'instagram-clone-5f2e3',
  storageBucket: 'instagram-clone-5f2e3.appspot.com',
  messagingSenderId: '760334358504',
};
firebase.initializeApp(config);

export const autenticacion = firebase.auth();
export const baseDeDatos = firebase.database();
