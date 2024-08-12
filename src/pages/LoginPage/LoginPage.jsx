import LoginForm from "../../LoginForm/LoginForm";
import css from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div>
      <h1 className={css.loginTitle}>Please Log in</h1>
      <LoginForm />
    </div>
  );
}
