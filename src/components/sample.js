import react from "react";
import {
  useFormik,
  yupToFormErrors,
  Form,
  Field,
  Formik,
  ErrorMessage,
} from "formik";
import * as Yup from "yup";

const initialValues = {
  userName: "",
  FullName: "",
  email: "",
  Password: "",
  ConfirmPassword: "",
};

const validationSchema = Yup.object({
  userName: Yup.string().required("required!"),
  FullName: Yup.string().required("required !"),
  email: Yup.string().required("rewuired!").email("invalid email"),
});

function sample() {}
export default sample;
