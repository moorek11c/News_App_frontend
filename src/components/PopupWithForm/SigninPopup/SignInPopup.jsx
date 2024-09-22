import "./SignInPopup.css";
import { usePopup } from "../../Hooks/usePopup";

import PopupWithForm from "../PopupWithForm";

function SignInPopup() {
  // using logic from usePopup
  const { open: openSignUp } = usePopup("SignUpPopup");

  return (
    <PopupWithForm popupName="SignInPopup" title="Sign in" buttonText="Sign in">
      <div className="sign-in__form">
        <p className="input__name">Email</p>
        <label
          className="popup__label popup__label-type-email"
          htmlFor="email-login"
        >
          <input
            id="email-login"
            type="email"
            className="popup__input"
            placeholder="Enter email"
          />
        </label>
        <p className="input__name">Password</p>
        <label
          htmlFor="password-login"
          className="popup__label popup__label-type-password"
        >
          <input
            type="password"
            id="password-login"
            name="password"
            className="popup__input"
            placeholder="Enter password"
          />
        </label>
        <button className="signup__btn" onClick={openSignUp}>
          or <span className="span__class-sign-up">sign up</span>
        </button>
      </div>
    </PopupWithForm>
  );
}

export default SignInPopup;
