import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";  // Import auth methods

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7Fxg0485h4kHQ9Tsx96Z5YMSCwfKsTSw",
  authDomain: "hackathon-d2de9.firebaseapp.com",
  projectId: "hackathon-d2de9",
  storageBucket: "hackathon-d2de9.firebasestorage.app",
  messagingSenderId: "485796084299",
  appId: "1:485796084299:web:273f38ded8dea0f059abce",
  measurementId: "G-F17HQZTXSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Initialize auth

// Google Sign-In function
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    return user;  // Return user after successful login
  } catch (error) {
    console.error("Error during Google sign-in:", error.message);
    return null;  // Return null if login fails
  }
};

export { auth, signInWithGoogle };  // Export both auth and signInWithGoogle
export default app;  // Default export for app
