import "./SignupPopup.css";
import { useContext } from "react";
import PopupWithForm from "../PopupWithForm";
import { usePopup } from "../../Hooks/usePopup";
import { useFormik } from "formik";
import { signupValidationSchema } from "../Validation/ValidationSchemas";

import { UserContext } from "../../Contexts/UserContext";

function SignupPopup() {
  const { open: openSignIn } = usePopup("signin");

  const { open: openConfirmation } = usePopup("confirmation");

  const { handleSignUp } = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    validationSchema: signupValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await handleSignUp(values);
        resetForm();
        openConfirmation();
      } catch (error) {
        console.error("Error during signup:", error);
      }
    },
  });

  return (
    <PopupWithForm
      onSubmit={formik.handleSubmit}
      popupName="signup"
      title="Sign up"
      buttonText="Sign up"
    >
      <div className="sign-up__form">
        <p className="input__name">Email</p>
        <label htmlFor="email-signup" className="popup__label--email">
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
        <label htmlFor="password-signup" className="popup__label--password">
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
        <label htmlFor="username-signup" className="popup__label--username">
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
          or <span className="signup__signin-btn">sign in</span>
        </button>
      </div>
    </PopupWithForm>
  );
}

export default SignupPopup;
