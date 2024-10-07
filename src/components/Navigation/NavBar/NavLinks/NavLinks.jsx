import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = ({ isLoggedIn }) => {
  return (
    <ul className="navlinks__list">
      <li className="navlinks__item navlinks__item--home">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "navlinks__link navlinks__link--active"
              : "navlinks__link"
          }
        >
          Home
        </NavLink>
      </li>
      {isLoggedIn && (
        <li className="navlinks__item navlinks__item--saved-news">
          <NavLink
            to="/saved-news"
            className={({ isActive }) =>
              isActive
                ? "navlinks__link navlinks__link--active"
                : "navlinks__link"
            }
          >
            Saved News
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
