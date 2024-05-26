import Link from "next/link";
import { Button } from "./ui/button";

const MenuMobile = () => {
  return (
    <div className="flex items-center gap-5 flex-auto">
      <nav className="flex items-center gap-5 pr-5 border-r border-solid border-muted-foreground font-barlow-semi-condensed">
        <Link href="/" className="font-semibold hover:underline">
          Home
        </Link>
        <Link href="/recipes" className="font-semibold hover:underline">
          Recipes
        </Link>
        <Link href="#" className="font-semibold hover:underline">
          Analysis
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Link href="/login">
          <Button>Login</Button>
        </Link>
        <Button>Toggle theme</Button>
      </div>
    </div>
  );
};

export default MenuMobile;
