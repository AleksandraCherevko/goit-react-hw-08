import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import css from "./App.module.css";

const HomePage = lazy(() => import("./components/pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./components/pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./components/pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("./components/pages/ContactsPage/ContactsPage")
);

export default function App() {
  return (
    <div className={css.container}>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}
