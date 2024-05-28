// pages/Recipes.tsx
import React from 'react';
import Header from '@/components/Header';
import Login1 from '@/components/Login';

function Login() {
  return (
    <div>
      <Header />
      <div className="text-center mt-8">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <p className="text-gray-600">Welcome to the login page!</p>
      </div>
      <div className="container mx-auto mt-8">
        <Login1 />
      </div>
    </div>
  );
}

export default Login;
