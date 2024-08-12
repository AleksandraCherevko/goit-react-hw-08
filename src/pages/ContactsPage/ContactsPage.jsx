import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContactList from "../../ContactList/ContactList";

import { fetchContacts } from "../../../redux/contacts/operations";
import { selectLoading, selectError } from "../../../redux/contacts/selectors";
import ContactForm from "../../ContactForm/ContactForm";
import SearchBox from "../../SearchBox/SearchBox";
import css from "./ContactPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className={css.contactsTitle}>Your contacts</h1>

      <ContactForm />
      <SearchBox />
      <ContactList />
      <div>{isLoading && "Request in progress..."}</div>
      <div>{isError && "Error!"}</div>
    </>
  );
}
