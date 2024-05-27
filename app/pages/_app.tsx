import React from 'react';
import '@/styles/globals.css';
import Header from "@/components/Header";
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="mb-6">
        <Header />
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
