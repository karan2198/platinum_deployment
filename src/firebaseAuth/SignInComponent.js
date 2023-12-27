

import React from 'react';
import { auth, googleProvider } from '../firebase';

const SignInWithGoogle = () => {
  const handleSignInWithGoogle = async () => {
    try {
      const result = await auth.signInWithPopup(googleProvider);
      const user = result.user;
      console.log('Successfully signed in with Google:', user);
    } catch (error) {
      console.error('Google Sign-In failed:', error);
    }
  };

  return (
    <button onClick={handleSignInWithGoogle}>
      Sign in with Google
    </button>
  );
};

export default SignInWithGoogle;
