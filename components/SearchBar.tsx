// components/SearchBar.tsx
import Search from "./Search";

const SearchBar = () => {
  return (
    <div className="col-span-2 justify-self-center min-w-[300px] w-fill max-w-[400px] sm:col-span-1 sm:col-start-2 sm:row-start-1">
      <Search />
    </div>
  );
};

export default SearchBar;
