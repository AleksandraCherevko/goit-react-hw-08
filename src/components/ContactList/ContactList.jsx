// import { useSelector } from "react-redux";
// import Contact from "../Contact/Contact";
// import css from "./ContactList.module.css";

// export default function ContactList() {
//   const contacts = useSelector((state) => state.contacts.items);
//   const filter = useSelector((state) => state.filters.name);

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter)
//   );

//   return (
//     <ul className={css.contactList}>
//       {filteredContacts.map((contact) => (
//         <li key={contact.id}>
//           <Contact
//             id={contact.id}
//             name={contact.name}
//             phoneNumber={contact.number}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// }
// x