import "./NavBar.css";
import logoutIconLight from "../../../Assets/logoutlight.png";
import logoutIconDark from "../../../Assets/logoutdark.svg";
import menuLight from "../../../Assets/menulight.svg";
import menuDark from "../../../Assets/menudark.svg";
import mobileLogo from "../../../Assets/NewsExplorer.svg";
import closeBtn from "../../../Assets/CloseBtn.svg";
import { useContext, useState } from "react";
import { usePopup } from "../../Hooks/usePopup";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";

function NavBar({ isSavedNewsPage }) {
  const { open: openSignIn } = usePopup("SignInPopup");
  const { isLoggedIn, handleLogout } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Extract rendering of the nav links into a function
  const renderNavLinks = () => (
    <ul className="navlinks__list">
      <li className="navlink__home">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navlink navlink_active" : "navlink"
          }
        >
          Home
        </NavLink>
      </li>
      {isLoggedIn && (
        <li className="navlink__saved-news">
          <NavLink
            to="/saved-news"
            className={({ isActive }) =>
              isActive ? "navlink navlink_active" : "navlink"
            }
          >
            Saved News
          </NavLink>
        </li>
      )}
    </ul>
  );

  // Extract logout and login button rendering
  const renderAuthButton = () => {
    const icon = isSavedNewsPage ? logoutIconDark : logoutIconLight;
    return isLoggedIn ? (
      <button
        onClick={handleLogout}
        type="button"
        className="navlink__sign-out"
      >
        <p className="user__name-logout">user</p>
        <img className="logout__icon" src={icon} alt="logout" />
      </button>
    ) : (
      <button onClick={openSignIn} type="button" className="navlink__sign-in">
        sign in
      </button>
    );
  };

  return (
    <div className={isSavedNewsPage ? "navbar navbar__saved-news" : "navbar"}>
      <nav className="navlinks__container">
        {/* Hamburger icon for mobile */}
        <button className="hamburger-icon" onClick={toggleMenu}>
          <img src={isSavedNewsPage ? menuDark : menuLight} alt="menu" />
        </button>

        {/* Show mobile menu if open */}
        <div className={menuOpen ? "mobile__menu_open" : "mobile__menu"}>
          <div className="mobile__header">
            <img className="mobile__logo" src={mobileLogo} alt="" />
            <button className="mobile__close-btn" onClick={toggleMenu}>
              <img className="close__btn" src={closeBtn} alt="close button" />
            </button>
          </div>
          {renderNavLinks()}
          {renderAuthButton()}
        </div>

        {/* Regular links for desktop view */}
        <div className="navlinks__desktop">
          {renderNavLinks()}
          {renderAuthButton()}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
