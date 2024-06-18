// pages/Home.tsx
import React from "react";
import Header from "@/components/Header";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <div className="mb-6">
        <Header />
      </div>
      <div>
        <HeroSection />
      </div>
    </>
  );
}
