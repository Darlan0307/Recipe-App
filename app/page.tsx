import Header from "@/components/header";
import Link from 'next/link';
import Index from "./home";

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
