import Link from "next/link";
import { Button } from "./ui/button";

const MenuDesktop = () => {
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
        <Button>
          <Link href="/login" >Login</Link>
        </Button>
        <Button>Toggle theme</Button>
      </div>
    </div>
  );
};

export default MenuDesktop;