import "./NavBar.css";
import menuLight from "../../../Assets/menulight.svg";
import menuDark from "../../../Assets/menudark.svg";
import { useContext, useState } from "react";
import { usePopup } from "../../Hooks/usePopup";
import { UserContext } from "../../Contexts/UserContext";
import NavLinks from "./NavLinks/NavLinks";
import AuthButton from "./AuthButtons/AuthButtons";
import MobileMenu from "./MobileMenu/MobileMenu";

function NavBar({ isSavedNewsPage }) {
  const { open: openSignIn } = usePopup("signin");
  const { isLoggedIn, username, handleLogout } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={isSavedNewsPage ? "navbar navbar--saved-news" : "navbar"}>
      <nav className="navbar__container">
        <button className="navbar__hamburger-icon" onClick={toggleMenu}>
          <img src={isSavedNewsPage ? menuDark : menuLight} alt="menu" />
        </button>
        {menuOpen && (
          <MobileMenu
            isOpen={menuOpen}
            toggleMenu={toggleMenu}
            isLoggedIn={isLoggedIn}
            username={username}
            handleLogout={handleLogout}
            isSavedNewsPage={isSavedNewsPage}
            openSignIn={openSignIn}
          />
        )}
        <div className="navbar__desktop">
          <NavLinks isLoggedIn={isLoggedIn} />
          <AuthButton
            isOpen={menuOpen}
            isLoggedIn={isLoggedIn}
            username={username}
            handleLogout={handleLogout}
            isSavedNewsPage={isSavedNewsPage}
            openSignIn={openSignIn}
            isMobileMenu={false}
          />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
