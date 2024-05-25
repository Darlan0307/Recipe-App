// components/Navigation.tsx
import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";

function Navigation() {
  return (
    <div className="justify-self-end sm:col-start-3 lg:order-3">
      <div className="lg:hidden">
        <MenuMobile />
      </div>
      <div className="hidden lg:block">
        <MenuDesktop />
      </div>
    </div>
  );
};

export default Navigation;
