import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../PageTitle/PageTitle";
import ContactList from "../../ContactList/ContactList";
import ContactEditor from "../../ContactEditor/ContactEditor";
import { fetchContact } from "../../../redux/contacts/operations";
import { selectLoading } from "../../../redux/contacts/selectors";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <>
      <PageTitle>Your tasks</PageTitle>

      <ContactEditor />
      <div>{isLoading && "Request in progress..."}</div>
      <ContactList />
    </>
  );
}
