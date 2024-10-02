import { useContext } from "react";

import "./SignInPopup.css";
import { usePopup } from "../../Hooks/usePopup";
import { useFormik } from "formik";
import { signinValidationSchema } from "../Validation/ValidationSchemas";
import { UserContext } from "../../Contexts/UserContext";

import PopupWithForm from "../PopupWithForm";

function SignInPopup() {
  const { open: openSignUp, close } = usePopup("SignUpPopup");
  const { handleLogin } = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signinValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await handleLogin(values);
        resetForm();
        close();
        console.log("submitted values", values);
      } catch (error) {
        console.error("Error during signin:", error);
      }
    },
  });

  const handleOpenSignUp = () => {
    formik.resetForm(); // Reset form state
    openSignUp();
  };

  return (
    <PopupWithForm
      onSubmit={formik.handleSubmit}
      popupName="SignInPopup"
      title="Sign in"
      buttonText="Sign in"
    >
      <div className="sign-in__form">
        <p className="input__name">Email</p>
        <label
          className="popup__label popup__label-type-email"
          htmlFor="email-login"
        >
          <input
            id="email-login"
            type="email"
            name="email"
            className={`popup__input ${
              formik.errors.email && formik.touched.email ? "input__error" : ""
            }`}
            placeholder="Enter email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onSubmit={formik.handleSubmit}
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
            id="password-login"
            name="password"
            className={`popup__input ${
              formik.errors.password && formik.touched.password
                ? "input__error"
                : ""
            }`}
            placeholder="Enter password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            onSubmit={formik.handleSubmit}
          />
          {formik.touched.password && formik.errors.password && (
            <span className="error-message">{formik.errors.password}</span>
          )}
        </label>
        <button className="signup__btn" onClick={handleOpenSignUp}>
          or <span className="span__class-sign-up">sign up</span>
        </button>
      </div>
    </PopupWithForm>
  );
}

export default SignInPopup;
