import "./Header.css";

import NavBar from "../Header/NavBar/NavBar";

// images
import headerLogo from "../../Assets/NewsExplorerlight.svg";
import headerLogoDark from "../../Assets/NewsExplorerdark.svg";

const Header = ({ isSavedNewsPage }) => {
  return (
    <header
      className={isSavedNewsPage ? "header header__saved-news" : "header"}
    >
      <img
        className="header__logo"
        src={isSavedNewsPage ? headerLogoDark : headerLogo}
        alt="NewsExplorer"
      />
      <NavBar isSavedNewsPage={isSavedNewsPage} />
    </header>
  );
};

export default Header;
