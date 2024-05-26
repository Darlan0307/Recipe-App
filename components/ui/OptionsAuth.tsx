import React from 'react';
import { Button } from './button';

const OptionsAuth = () => {
  const handleGoogleSignIn = () => {
    // Lógica para autenticação com Google
    console.log('Sign in with Google');
  };

  const handleFacebookSignIn = () => {
    // Lógica para autenticação com Facebook
    console.log('Sign in with Facebook');
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={handleGoogleSignIn} className="w-full bg-red-500 font-bold text-xl p-1">
        Sign in with Google
      </Button>
      <Button onClick={handleFacebookSignIn} className="w-full bg-blue-700 font-bold text-xl p-1">
        Sign in with Facebook
      </Button>
    </div>
  );
};

export default OptionsAuth;
