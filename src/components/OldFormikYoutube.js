import React from "react";
import { useFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("formdata", values);
};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "required";
  }
  if (!values.email) {
    errors.email = "required";
  } else if (
    !/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9.-])+\.([A-Za-z]{2,4})$/i.test(values.email)
  ) {
    errors.email = "invalid email format";
  }
  if (!values.channel) {
    errors.channel = "required";
  }
  return errors;
};
const validationSchema = Yup.object({
  name: Yup.string().required("required!"),
  email: Yup.string().email("invalid email format").required("required!"),
  channel: Yup.string().required("required"),
});
function OldFormikYoutube(props) {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validate,
  });
  //console.log("form errors", formik.errors);
  //console.log("form values",formik.values);
  console.log(" visited fields ", formik.touched);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">username</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="channel">channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            value={formik.values.channel}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>
        <button type="sumbit">submit</button>
      </form>
    </div>
  );
}

export default OldFormikYoutube;
