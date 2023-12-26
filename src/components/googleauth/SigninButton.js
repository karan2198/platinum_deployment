"use client";
import React from "react";
import { signIn, signOut, SessionProvider, useSession } from "next-auth/react";

const SigninButton = () => {
  return (
    <SessionProvider>
      <SignInButtonContent />
    </SessionProvider>
  );
};

const SignInButtonContent = () => {
  const sessionData = useSession();
  const session = sessionData.data;

  if (session && session.user) {
    return (
      <div >
      
        <button onClick={() => signOut()} >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button onClick={() => signIn()} >
      Continue Google
    </button>
  );
};

export default SigninButton;
