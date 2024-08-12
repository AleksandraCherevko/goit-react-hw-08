import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <div className={css.contactCard}>
      <div className={css.contactInfo}>
        <p className={css.contactInfo}>{name}:</p>

        <p className={css.contactInfo}>{number}</p>
      </div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
