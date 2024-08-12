import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContactList from "../../ContactList/ContactList";
// import ContactEditor from "../../ContactEditor/ContactEditor";
import { fetchContact } from "../../../redux/contacts/operations";
import { selectLoading } from "../../../redux/contacts/selectors";
import ContactForm from "../../ContactForm/ContactForm";
import SearchBox from "../../SearchBox/SearchBox";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <>
      <h1>Your contacts</h1>

      <ContactForm />
      <SearchBox />
      <ContactList />
      <div>{isLoading && "Request in progress..."}</div>
    </>
  );
}
