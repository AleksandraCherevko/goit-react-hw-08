import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { useId } from "react";

export default function SearchBox() {
  const searchInput = useId();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(searchByName(e.target.value));
  };

  return (
    <label htmlFor={searchInput} className={css.searchBoxLabel}>
      Find contacts by name
      <input
        type="text"
        id={searchInput}
        className={css.searchBoxInput}
        onChange={handleSearch}
      />
    </label>
  );
}
