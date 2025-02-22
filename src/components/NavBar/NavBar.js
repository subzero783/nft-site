import "./NavBar.scss";
import MenuOne from "../MenuOne/MenuOne";
import LogoOne from "../LogoOne/LogoOne";
import SearchIconButton from "../SearchIconButton/SearchIconButton";
import ButtonOne from "../ButtonOne/ButtonOne";

const NavBar = () => {
  return (
    <nav>
      <LogoOne />
      <MenuOne classname="top-menu" />
      <div className="search-and-wallet-connect">
        <SearchIconButton />
        <ButtonOne
          link="https://example.com/"
          text="Wallet connect"
          target="_blank"
        />
      </div>
    </nav>
  );
};

export default NavBar;
