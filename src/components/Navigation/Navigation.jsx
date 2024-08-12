import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={css.NavLink}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.NavLink}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}


