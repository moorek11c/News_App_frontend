import "./SignInPopup.css";

import PopupWithForm from "../PopupWithForm/PopupWithForm";

function SignInPopup() {
  return (
    <PopupWithForm popupName="SignInPopup" title="Sign in" buttonText="Sign in">
      <div className="sign-in__form">
        <p className="input__name">Email</p>
        <label
          className="popup__label popup__label-type-email"
          htmlFor="email-login"
        >
          <input id="email-login" type="email" className="popup__input" />
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
          />
        </label>
        {/* TODO: Add Link "or Sign up" */}
      </div>
    </PopupWithForm>
  );
}

export default SignInPopup;
