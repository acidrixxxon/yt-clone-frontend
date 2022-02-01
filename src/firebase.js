import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {

    apiKey: "AIzaSyD8U8OctlfBpBG-b8PMwV7MMzxQRIidwuU",
  
    authDomain: "yt-clone-rixxxoid.firebaseapp.com",
  
    projectId: "yt-clone-rixxxoid",
  
    storageBucket: "yt-clone-rixxxoid.appspot.com",
  
    messagingSenderId: "255875673961",
  
    appId: "1:255875673961:web:7df179fc57ec4908c617f8"
  
  };



  firebase.initializeApp(firebaseConfig)

  export const auth = getAuth()
