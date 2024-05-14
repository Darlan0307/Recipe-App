import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Separator } from "./ui/separator";

const MenuMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu size={30} />
        </Button>
      </SheetTrigger>
      <SheetContent className="font-barlow-semi-condensed flex flex-col justify-start gap-8">
        <SheetHeader>
          <SheetTitle>Welcome 🤗!</SheetTitle>
        </SheetHeader>
        <div className="flex items-center justify-center gap-4 ">
          <Button>Login</Button>
          <Button>Toggle theme</Button>
        </div>
        <Separator className=" bg-muted-foreground" />
        <nav className="flex items-center gap-5 flex-col ">
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
        <Separator className=" bg-muted-foreground" />
        <p>Other options</p>
      </SheetContent>
    </Sheet>
  );
};

export default MenuMobile;
