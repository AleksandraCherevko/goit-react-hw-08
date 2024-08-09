import { useDispatch } from "react-redux";

import css from "./ContactEditor.module.css";
import { addContact } from "../../redux/contacts/operations";

export default function ContactEditor() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value;
    if (text !== "") {
      dispatch(addContact(text));
      form.reset();
      return;
    }
    alert("Contact cannot be empty. Enter some text!");
  };

  return (
    <form className={css.addContactForm} onSubmit={handleSubmit}>
      Add contact
      <input name="text" className={css.addContactInput} />
      <button type="submit" className={css.addContactBtn}>
        Add contact
      </button>
    </form>
  );
}
