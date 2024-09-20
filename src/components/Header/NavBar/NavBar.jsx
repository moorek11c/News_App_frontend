import "./NavBar.css";

import { usePopup } from "../../Hooks/usePopup";

function NavBar() {
  const { open: openSignIn } = usePopup("SignInPopup");
  return (
    <>
      <div className="navlinks__container">
        <button type="button" className="navlink__home">
          Home
        </button>
        <button onClick={openSignIn} type="button" className="navlink__sign-in">
          Sign in
        </button>
      </div>
    </>
  );
}

export default NavBar;
