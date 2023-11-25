<script setup>
import { ref } from 'vue'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const provider = new GoogleAuthProvider();
const user = ref(null); // Add this line

async function authButton() {
  const auth = getAuth();
  try {
    const result = await signInWithPopup(auth, provider);
    // Check if result.credential is defined
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      console.log(token);
    }
    // The signed-in user info.
    user.value = result.user;
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.error(errorCode, errorMessage, email, credential);
  }
}

async function logoutButton() {
  const auth = getAuth();
  try {
    await signOut(auth);
    user.value = null; // Clear the user data
  } catch (error) {
    console.error('Error signing out: ', error);
  }
}

</script>

<template>
  <div>
    <h1>
      Vue User Auth
    </h1>
  </div>

  <div v-if="!user">
    <button @click="authButton()">Google Login</button>
  </div>

  <div v-if="user">
    <button @click="logoutButton()">Logout</button>
  </div>

  <div>
    <h1 v-if="user">Welcome, {{ user.displayName }}!</h1>
  </div>
  <div>
    <h1 v-if="user && user.premium">You have premium, Nice!</h1>
  </div>

</template>

<style scoped>

</style>
