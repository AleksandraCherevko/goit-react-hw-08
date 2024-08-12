import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <div className={css.contactCard}>
      <div className={css.contactInfo}>
        <p className={css.contactInfo}>{contact.name}:</p>

        <p className={css.contactInfo}>{contact.number}</p>
      </div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
