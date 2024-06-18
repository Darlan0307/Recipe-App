// pages/Home.tsx
import React from "react";
import Header from "@/components/Header";
import Link from "next/link";
import Index from "./pages/home";

export default function Home() {
  return (
    <>
      <div className="mb-6">
        <Header />
      </div>
      <div>
        <Link href="/">
          <Index />
        </Link>
      </div>
    </>
  );
}
