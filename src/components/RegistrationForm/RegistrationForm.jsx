import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import * as Yup from "yup";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Username too short!")
    .max(50, "Username too long!")
    .required("Required!"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password too short!")
    .max(50, "Password too long!")
    .required("Required!"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (values, actions) => {
    setLoading(true);
    setError(null);

    try {
      await dispatch(register(values));
      actions.resetForm();
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label} htmlFor="name">
          Username
          <Field type="text" name="name" id="name" className={css.field} />
          <ErrorMessage name="name" component="div" className={css.error} />
        </label>

        <label className={css.label} htmlFor="email">
          Email
          <Field type="email" name="email" id="email" className={css.field} />
          <ErrorMessage name="email" component="div" className={css.error} />
        </label>

        <label className={css.label} htmlFor="password">
          Password
          <Field
            type="password"
            name="password"
            id="password"
            className={css.field}
          />
          <ErrorMessage name="password" component="div" className={css.error} />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>

        {error && <div className={css.error}>{error}</div>}
      </Form>
    </Formik>
  );
}
