import css from "./SearchBox.module.css";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   changeTextFilter,
//   selectContactsFilter,
// } from "../../redux/filtersSlice";

import { selectNameFilter } from "../../redux/filters/selectors";
import { setStatusFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const id = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilter = (event) => {
    const name = event.target.value.trim();
    dispatch(setStatusFilter(name));
  };

  return (
    <label htmlFor={id} className={css.searchBoxLabel}>
      Find contacts by name
      <input
        type="text"
        id={id}
        value={filter}
        className={css.searchBoxInput}
        onChange={handleFilter}
      />
    </label>
  );
}
