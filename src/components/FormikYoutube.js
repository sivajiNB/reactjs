import React from "react";
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
  name: "",
  email: "",
  channel: "",
  comments: "",
};
const onSubmit = (values) => {
  console.log("formdata", values);
};
// const validate = (values) => {
//   let errors = {};
//   if (!values.name) {
//     errors.name = "required";
//   }
//   if (!values.email) {
//     errors.email = "required";
//   } else if (
//     !/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9.-])+\.([A-Za-z]{2,4})$/i.test(values.email)
//   ) {
//     errors.email = "invalid email format";
//   }
//   if (!values.channel) {
//     errors.channel = "required";
//   }
//   return errors;
// };
const validationSchema = Yup.object({
  name: Yup.string().required("required!").min(2, "not greater than 2"),
  email: Yup.string().email("invalid email format").required("required!"),
  channel: Yup.string().required("required !"),
  comments: Yup.string().required("required  !"),
});
function FormikYoutube(props) {
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validationSchema,
  //   // validate,
  // });
  //console.log("form errors", formik.errors);
  //console.log("form values",formik.values);
  //boilerplate
  //console.log(" visited fields ", formik.touched);
  //ghghghjghjghgh
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-control">
            <label htmlFor="name">username</label>

            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" />
          </div>

          <div className="form-control">
            <label htmlFor="email">email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" />
          </div>
          <div className="form-control">
            <label htmlFor="channel">channel</label>
            <Field type="text" id="channel" name="channel" />
            <ErrorMessage name="channel" />
          </div>
          <div className="form-control">
            <label htmlFor="comments">Comments</label>
            <br />
            <Field as="textarea" id="comments" name="comments" />
            <ErrorMessage name="comments" />
          </div>

          <button type="sumbit">submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikYoutube;
