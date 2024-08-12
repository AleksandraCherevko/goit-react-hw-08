import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

import { useLocation, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { state } = useLocation();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(logIn(values));
      actions.resetForm();
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
  
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
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
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
}
