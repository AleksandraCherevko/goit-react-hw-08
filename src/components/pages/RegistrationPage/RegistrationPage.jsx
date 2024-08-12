import RegistrationForm from "../../RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";
export default function RegistrationPage() {
  return (
    <div>
      <h1 className={css.registerTitle}>Register your account</h1>
      <RegistrationForm />
    </div>
  );
}
