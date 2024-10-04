import "./MobileMenu.css";
import mobileLogo from "../../../../Assets/NewsExplorer.svg";
import closeBtn from "../../../../Assets/CloseBtn.svg";
import NavLinks from "../NavLinks/NavLinks";
import AuthButton from "../AuthButtons/AuthButtons";

const MobileMenu = ({
  isOpen,
  toggleMenu,
  isLoggedIn,
  username,
  handleLogout,
  isSavedNewsPage,
  openSignIn,
}) => {
  return (
    <div className={isOpen ? "mobile-menu mobile-menu--open" : "navbar"}>
      <div className="mobile-menu__header">
        <img
          className="mobile-menu__logo"
          src={mobileLogo}
          alt="NewsExplorer"
        />
        <button className="mobile-menu__close-btn" onClick={toggleMenu}>
          <img
            className="mobile-menu__close-icon"
            src={closeBtn}
            alt="close button"
          />
        </button>
      </div>
      <NavLinks isLoggedIn={isLoggedIn} />
      <AuthButton
        isLoggedIn={isLoggedIn}
        username={username}
        handleLogout={handleLogout}
        isSavedNewsPage={isSavedNewsPage}
        openSignIn={openSignIn}
      />
    </div>
  );
};

export default MobileMenu;
