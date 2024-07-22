"use client";

import React, { useState, FormEvent } from 'react';
import { toast } from "react-toastify";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Em desenvolvimento...");
  };

  return (
    <main className="w-full max-w-[450px] mx-auto flex flex-col gap-6 px-4">
      <div className="relative">
        <div className="rounded-lg border shadow border-gray-200 p-7 mt-[-30px] w-full">
          <h1 className="text-3xl text-center font-bold mt-4 gap-2">Login</h1>
          <p className="text-gray-400 mt-4 text-center gap-2">Welcome to the login page!</p>
          <br />
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="flex flex-col items-center gap-8"
          >
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex p-4 items-center justify-between w-full">
              <div className="flex items-center mr-4">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="forgotPassword"
                  checked={forgotPassword}
                  onChange={(e) => setForgotPassword(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="forgotPassword">Forgot my password</label>
              </div>
            </div>
            <button
              type="submit"
              className="w-1/2 bg-blue-500 text-white font-bold text-xl p-2 rounded"
            >
              Login
            </button>
          </form>
          <br />
        </div>
      </div>
      <div className="relative my-3">
        <div className="h-[1px] w-full"></div>
        <span className="absolute left-[45%] mt-[-10px] border border-gray-40 rounded-sm 0 font-bold text-xl p-1">
          OR
        </span>
      </div>
      <p className="mt-2 text-center text-lg">
        Do not have an account,{" "}
        <a href="/signup" className="font-bold text-gray-400 underline">
          create now!
        </a>
      </p>
    </main>
  );
};

export default LoginForm;
