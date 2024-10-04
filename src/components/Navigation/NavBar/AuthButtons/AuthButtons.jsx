import "./AuthButtons.css";
import logoutIconLight from "../../../../Assets/logoutlight.png";
import logoutIconDark from "../../../../Assets/logoutdark.svg";

const AuthButton = ({
  isLoggedIn,
  username,
  handleLogout,
  isSavedNewsPage,
  openSignIn,
}) => {
  const icon = isSavedNewsPage ? logoutIconDark : logoutIconLight;
  return isLoggedIn ? (
    <button
      onClick={handleLogout}
      type="button"
      className="authButton__sign-out"
    >
      <p className="authButton__username">{username}</p>
      <img className="authButton__icon" src={icon} alt="logout" />
    </button>
  ) : (
    <button onClick={openSignIn} type="button" className="authButton__sign-in">
      Sign In
    </button>
  );
};

export default AuthButton;
