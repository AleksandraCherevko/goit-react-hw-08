import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={css.authNav}>
      <NavLink className={css.NavLink} to="/register">
        Register
      </NavLink>
      <NavLink className={css.NavLink} to="/login">
        Log In
      </NavLink>
    </div>
  );
}
