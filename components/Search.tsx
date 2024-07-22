import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <form className="flex relative w-full">
      <Input
        placeholder="🔎 Type here 🍳..."
        className="shadow-lg border-gray text-lg"
      />
      <Button
        className="absolute text-white top-[50%] -translate-y-[50%] right-0"
        size="icon"
      >
        <SearchIcon />
      </Button>
    </form>
  );
};

export default Search;
