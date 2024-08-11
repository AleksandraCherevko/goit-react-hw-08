import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import contactReducer from "./contacts/slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistedAuthReducer = persistReducer(
  {
    key: "auth-token",
    storage,
    whitelist: ["token"],
  },
  authReducer
);

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    auth: persistedAuthReducer,
  },
});

export const persistor = persistStore(store);
