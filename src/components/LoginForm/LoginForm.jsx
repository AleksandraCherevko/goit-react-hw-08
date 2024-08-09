import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password too short!")
    .max(50, "Password too long!")
    .required("Required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(logIn(values));
      actions.resetForm();
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
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
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </label>
          <button type="submit">Log in</button>
        </Form>
      )}
    </Formik>
  );
}
