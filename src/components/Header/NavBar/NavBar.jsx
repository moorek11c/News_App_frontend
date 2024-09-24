import "./NavBar.css";

import { usePopup } from "../../Hooks/usePopup";
import { NavLink } from "react-router-dom";

function NavBar() {
  const { open: openSignIn } = usePopup("SignInPopup");
  return (
    <nav className="navlinks__container">
      <ul className="navlinks__list">
        <li className="navlink__home">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navlink navlink--active" : "navlink"
            }
          >
            <span className="span__class_home">Home</span>
          </NavLink>
        </li>
      </ul>
      <button onClick={openSignIn} type="button" className="navlink__sign-in">
        Sign in
      </button>
    </nav>
  );
}

export default NavBar;
