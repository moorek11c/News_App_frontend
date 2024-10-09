import * as Yup from "yup";

export const signupValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("please enter a valid email")
    .required("you must enter a email"),
  password: Yup.string()
    .min(6, "password must be 6 characters long")
    .required("password is required"),
  username: Yup.string()
    .required("username is required")
    .min(2, "username must be more than 2 characters long")
    .max(15, "username can not be longer than 15 characters"),
});

export const signinValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("please enter a valid email")
    .required("email field is required"),
  password: Yup.string().min(6, "Too short of password").required("required"),
});
