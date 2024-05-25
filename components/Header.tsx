import Navigation  from "./Navigation";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className="grid grid-cols-2 items-center gap-6 p-5 sm:grid-cols-3 lg:flex lg:justify-between lg:px-12">
      <Logo />
      <Navigation />
      <SearchBar />
    </header>
  );
};

export default Header;
