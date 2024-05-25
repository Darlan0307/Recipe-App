// components/Logo.tsx
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div className="relative w-[100px] h-[100px]">
      <Link href="/">
        <div style={{ position: 'relative' }}>
          <Image src="/logo.png" alt="Website Logo" width={80} height={60} priority />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
