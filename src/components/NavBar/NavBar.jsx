import "./NavBar.css";

import logoutIconLight from "../../Assets/logoutlight.png";
import logoutIconDark from "../../Assets/logoutdark.svg";

import { useContext } from "react";

import { usePopup } from "../Hooks/usePopup";
import { NavLink } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";

function NavBar({ isSavedNewsPage }) {
  const { open: openSignIn } = usePopup("SignInPopup");
  const { isLoggedIn, handleLogout } = useContext(UserContext);

  return (
    <div className={isSavedNewsPage ? "navbar navbar__saved-news" : "navbar"}>
      <nav className="navlinks__container">
        <ul className="navlinks__list">
          <li className="navlink__home">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "navlink navlink--active" : "navlink"
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
                  isActive ? "navlink navlink--active" : "navlink"
                }
              >
                Saved News
              </NavLink>
            </li>
          )}
        </ul>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            type="button"
            className="navlink__sign-out"
          >
            <p className="user__name-logout">user</p>
            <img
              className="logout__icon"
              src={isSavedNewsPage ? logoutIconDark : logoutIconLight}
              alt="logout"
            />
          </button>
        ) : (
          <button
            onClick={openSignIn}
            type="button"
            className="navlink__sign-in"
          >
            sign in
          </button>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
