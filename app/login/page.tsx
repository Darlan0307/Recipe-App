import React from 'react';
import Header from '@/components/Header';
import LoginForm from '@/components/Login';

export default function LoginPage() {
  return (
    <div>
      <Header />
      <div className="container mx-auto mt-8">
        <LoginForm />
      </div>
    </div>
  );
}
