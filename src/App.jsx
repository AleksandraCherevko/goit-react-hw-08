import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { DNA } from "react-loader-spinner";
import RestrictedRoute from "./components/RestictedRoute";
import PrivateRoute from "./components/PrivateRoute";

const HomePage = lazy(() => import("./components/pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./components/pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./components/pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("./components/pages/ContactsPage/ContactsPage")
);

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>
      <DNA />
    </div>
  ) : (
    <div className={css.container}>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<RegistrationPage />}
                  redictTo="/contacts/"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo="/contacts/"
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute element={<ContactsPage />} redirectTo="/login" />
              }
            />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}
