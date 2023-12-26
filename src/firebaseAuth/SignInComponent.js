// SignInComponent.js
import React from 'react';
import firebase from '../firebase'; // Path to your Firebase configuration file

const SignInComponent = () => {
  const signInWithGoogle= async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      // User signed in
    } catch (error) {
      // Handle error
      console.error('Error signing in:', error);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default SignInComponent;
