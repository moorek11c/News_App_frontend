import "./Header.css";

// images
import headerLogo from "../../Assets/NewsExplorer.svg";

// components
import NavBar from "./NavBar/NavBar";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <img className="header__logo" src={headerLogo} alt="NewsExplorer" />
          <NavBar />
        </div>
      </header>
    </>
  );
};

export default Header;
