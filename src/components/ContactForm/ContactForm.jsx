import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const loading = useSelector((state) => state.contacts.loading);
  const isError = useSelector((state) => state.contacts.error);
  // const formikInitialValue = { id: "", name: "", number: "" };

  const initialContact = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialContact}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.contactForm}>
        <label htmlFor={nameFieldId} className={css.label}>
          Username
        </label>
        <Field
          id={nameFieldId}
          className={css.inputField}
          type="text"
          name="name"
        />
        {loading && <p>Loading..</p>}
        {isError && (
          <ErrorMessage
            name="number"
            component="span"
            className={css.errorMessage}
          />
        )}
        <label htmlFor={numberFieldId} className={css.label}>
          Phone Number
        </label>
        <Field
          id={numberFieldId}
          className={css.inputField}
          type="text"
          name="number"
        />
        {loading && <p>Loading..</p>}
        {isError && (
          <ErrorMessage
            name="number"
            component="span"
            className={css.errorMessage}
          />
        )}
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
