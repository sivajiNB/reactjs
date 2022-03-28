import react from "react";
import ReactDOM from "react";
import { Field, Form, useFormik, FormikProvider } from "formik";
function FormikClass(props) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },

    onSubmit: (values) => {
      console.log("form initial data", values);
      alert(JSON.stringify(values));
    },
  });
  console.log("Formik values", formik.values);
  return (
    <div>
      FormikClass
      <FormikProvider value={formik}>
        <Form onSubmit={formik.handleSubmit}>
          <label hrmlFor="firstName">FirstName</label>
          <Field
            id="firstName"
            name="firstName"
            placeholder="jane"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
          <br />
          <label htmlFor="lastName">LastName</label>
          <Field
            id="lastName"
            name="lastName"
            placeholder="doe"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
          <br />
          <label htmlFor="email">email</label>
          <Field
            id="email"
            name="email"
            placeholder="sivaji143nb@gmail.com"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <br />
          <button type="submit">sumbit</button>
        </Form>
      </FormikProvider>
    </div>
  );
}

export default FormikClass;
