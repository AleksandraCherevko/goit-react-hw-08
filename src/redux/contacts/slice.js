import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, logOut } from "./operations";
import { selectContacts } from "./selectors";

import { selectNameFilter } from "../filters/selectors";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
      });
  },
});

export const visibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filtersContact) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filtersContact.toLowerCase())
    );
  }
);
export const contactReducer = contactsSlice.reducer;

// export const selectLoading = (state) => state.contacts.loading;
// export const selectError = (state) => state.contacts.error;

// export const selectContacts = (state) => state.contacts.items;
// export default slice.reducer;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectContactsFilter],
//   (contacts, name) =>
//     contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(name.toLowerCase())
//     )
// );
