import Image from "next/image";
import Link from "next/link";
import MenuMobile from "./menu-mobile";
import Search from "./search";
import MenuDesktop from "./menu-desktop";

const Header = () => {
  return (
    <header className="grid grid-cols-2 items-center gap-6 p-5 sm:grid-cols-3 lg:flex lg:justify-between lg:px-12" >
      <div className="relative w-[100px] h-[100px]">
        <Link href="/">
          <Image src="/logo.png" alt="website logo" fill sizes="100%" />
        </Link>
      </div>
      <div className="justify-self-end sm:col-start-3 lg:order-3">
        <div className="lg:hidden">
          <MenuMobile />
        </div>
        <div className="hidden lg:block">
          <MenuDesktop />
        </div>
      </div>
      <div className="col-span-2 justify-self-center min-w-[300px] w-fill max-w-[400px] sm:col-span-1 sm:col-start-2 sm:row-start-1">
        <Search />
      </div>
    </header>
  );
};

export default Header;
