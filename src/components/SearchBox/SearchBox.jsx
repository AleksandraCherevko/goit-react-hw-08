import css from "./SearchBox.module.css";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeTextFilter,
  selectContactsFilter,
} from "../../redux/filtersSlice";

export default function SearchBox() {
  const id = useId();
  const dispatch = useDispatch();
  const textFilter = useSelector(selectContactsFilter);

  const handleChange = (event) => {
    dispatch(changeTextFilter(event.target.value));
  };

  return (
    <label htmlFor={id} className={css.searchBoxLabel}>
      Find contacts by name
      <input
        type="text"
        id={id}
        value={textFilter}
        className={css.searchBoxInput}
        onChange={handleChange}
      />
    </label>
  );
}
