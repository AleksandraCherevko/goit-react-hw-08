import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { visibleContacts } from "../../redux/contacts/slice";

export default function ContactList() {
  const filtrContacts = useSelector(visibleContacts);
  return (
    <ul className={css.contactList}>
      {filtrContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
