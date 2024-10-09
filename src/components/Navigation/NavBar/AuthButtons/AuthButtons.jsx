import "./AuthButtons.css";
import logoutIconLight from "../../../../Assets/logoutlight.png";
import logoutIconDark from "../../../../Assets/logoutdark.svg";

const AuthButton = ({
  isLoggedIn,
  username,
  handleLogout,
  isSavedNewsPage,
  openSignIn,
  isMobileMenu,
}) => {
  const icon = isMobileMenu
    ? logoutIconLight
    : isSavedNewsPage
    ? logoutIconDark
    : logoutIconLight;

  return isLoggedIn ? (
    <div className="authButton__wrapper">
      <button
        onClick={handleLogout}
        type="button"
        className="authButton__sign-out"
      >
        <p className="authButton__username">{username}</p>
        <img className="authButton__icon" src={icon} alt="logout" />
      </button>
    </div>
  ) : (
    <div className="authButton__wrapper">
      <button
        onClick={openSignIn}
        type="button"
        className="authButton__sign-in"
      >
        Sign In
      </button>
    </div>
  );
};

export default AuthButton;
