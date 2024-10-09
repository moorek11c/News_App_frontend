import { NavLink } from "react-router-dom";
import "./Header.css";

import NavBar from "../Navigation/NavBar/NavBar";

// images
import headerLogo from "../../Assets/NewsExplorerlight.svg";
import headerLogoDark from "../../Assets/NewsExplorerdark.svg";

const Header = ({ isSavedNewsPage }) => {
  return (
    <header
      className={isSavedNewsPage ? "header header--saved-news" : "header"}
    >
      <NavLink className="header__home-link" to="/">
        <img
          className="header__logo"
          src={isSavedNewsPage ? headerLogoDark : headerLogo}
          alt="NewsExplorer"
        />
      </NavLink>
      <NavBar isSavedNewsPage={isSavedNewsPage} />
    </header>
  );
};

export default Header;
