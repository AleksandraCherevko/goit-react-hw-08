//

import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";
import { addContact } from "./operations";
import { deleteContact } from "./operations";
import { selectContactsFilter } from "../filters/slice";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
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
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectContacts = (state) => state.contacts.items;
export default slice.reducer;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectContactsFilter],
  (contacts, name) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    )
);
