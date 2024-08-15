// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVF3yi8sCw997prSEKtNdtqiw8D9-pzAI",
  authDomain: "login-page-2cfa2.firebaseapp.com",
  projectId: "login-page-2cfa2",
  storageBucket: "login-page-2cfa2.appspot.com",
  messagingSenderId: "744561295279",
  appId: "1:744561295279:web:a9b4ab8c30f6cc35fbb95a",
  measurementId: "G-SW5DPMXSDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get DOM elements
const signInForm = document.querySelector('.sign-in form');
const signUpForm = document.querySelector('.sign-up form');
const signInBtnlink = document.querySelector('.signInBtn-link');
const signUpBtnlink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

// Toggle between sign-in and sign-up forms
signUpBtnlink.addEventListener('click', () => {
  wrapper.classList.toggle('active');
});

signInBtnlink.addEventListener('click', () => {
  wrapper.classList.toggle('active');
});

// Sign Up
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('signUpEmail').value;
  const password = document.getElementById('signUpPassword').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("User signed up:", user);
      alert("Signup successful!");
      signUpForm.reset();
      // Redirect to home.html
      window.location.href = "/homepage/home.html";  // If the file is in a subfolder called homepage
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Signup error:", errorCode, errorMessage);
      alert(`Signup failed: ${errorMessage}`);
    });
});

// Sign In
signInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('signInEmail').value;
  const password = document.getElementById('signInPassword').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User signed in:", user);
      alert("Login successful!");
      signInForm.reset();
      // Redirect to home.html
      window.location.href = "/homepage/home.html";  // If the file is in a subfolder called homepage
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Login error:", errorCode, errorMessage);
      alert(`Login failed: ${errorMessage}`);
    });
});

// Sign Out (you can add this functionality to a sign-out button if needed)
function signOutUser() {
  signOut(auth).then(() => {
    console.log("User signed out");
    alert("Signed out successfully");
  }).catch((error) => {
    console.error("Sign out error:", error);
  });
}