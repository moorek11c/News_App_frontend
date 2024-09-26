import "./SignupPopup.css";
import { useContext } from "react";
import PopupWithForm from "../PopupWithForm";
import { usePopup } from "../../Hooks/usePopup";
import { useFormik } from "formik";
import { signupValidationSchema } from "../Validation/ValidationSchemas";

import { UserContext } from "../../Contexts/UserContext";

function SignupPopup() {
  const { open: openSignIn } = usePopup("SignInPopup");

  const { open: openConfirmation } = usePopup("ConfirmationPopup");

  const { handleSignUp } = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    validationSchema: signupValidationSchema,
    onSubmit: (values, { resetForm }) => {
      handleSignUp(values);
      resetForm();
      openConfirmation();
      console.log("submitted values", values);
    },
  });

  return (
    <PopupWithForm
      onSubmit={formik.handleSubmit}
      popupName="SignUpPopup"
      title="Sign up"
      buttonText="Sign up"
    >
      <div className="sign-up__form">
        <p className="input__name">Email</p>
        <label
          htmlFor="email-signup"
          className="popup__label popup__label-type-email"
        >
          <input
            type="email"
            name="email"
            id="email-signup"
            className={`popup__input ${
              formik.errors.email && formik.touched.email ? "input__error" : ""
            }`}
            placeholder="Enter email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="error-message">{formik.errors.email}</span>
          )}
        </label>

        <p className="input__name">Password</p>
        <label
          htmlFor="password-login"
          className="popup__label popup__label-type-password"
        >
          <input
            type="password"
            name="password"
            id="password-signup"
            className={`popup__input ${
              formik.errors.password && formik.touched.password
                ? "input__error"
                : ""
            }`}
            placeholder="Enter password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onSubmit={formik.handleSubmit}
          />
          {formik.touched.password && formik.errors.password && (
            <span className="error-message">{formik.errors.password}</span>
          )}
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
            className={`popup__input ${
              formik.errors.username && formik.touched.username
                ? "input__error"
                : ""
            }`}
            placeholder="Enter username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onSubmit={formik.handleSubmit}
          />
          {formik.touched.username && formik.errors.username && (
            <span className="error-message">{formik.errors.username}</span>
          )}
        </label>

        <button className="signin__btn" onClick={openSignIn}>
          or <span className="span__class-sign-up">sign in</span>
        </button>
      </div>
    </PopupWithForm>
  );
}

export default SignupPopup;
