import "./SignupPopup.css";

import PopupWithForm from "../PopupWithForm";
import { usePopup } from "../../Hooks/usePopup";
// import { usePopup } from "../../Hooks/usePopup";

function SignupPopup() {
  const { open: openSignIn } = usePopup("SignInPopup");
  return (
    <PopupWithForm popupName="SignUpPopup" title="Sign up" buttonText="Sign up">
      <div className="sign-up__form">
        <p className="input__name">Email</p>
        <label htmlFor="email-signup" className="popup__label-type-email">
          <input
            type="email"
            id="email-signup"
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
            id="password-signup"
            name="password"
            className="popup__input"
            placeholder="Enter password"
          />
        </label>
        <p className="input__name">Username</p>
        <label
          htmlFor="username-signup"
          className="popup__label popup__label-type-username"
        >
          <input
            type="name"
            id="username-signup"
            name="username"
            className="popup__input popup__input_username"
            placeholder="Enter username"
          />
        </label>
        <button className="signin__btn" onClick={openSignIn}>
          or <span className="span__class-sign-up">sign in</span>
        </button>
      </div>
    </PopupWithForm>
  );
}

export default SignupPopup;
