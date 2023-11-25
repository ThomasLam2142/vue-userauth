import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJQN3iCyEEgFh8I6hepm1fGM-uFWDwQK4",
  authDomain: "vue-userauth-68b94.firebaseapp.com",
  projectId: "vue-userauth-68b94",
  storageBucket: "vue-userauth-68b94.appspot.com",
  messagingSenderId: "104711644910",
  appId: "1:104711644910:web:2c42c7261c3323dcecf5ff",
  measurementId: "G-MDYNDL4V31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();