import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "filets",
  initialState: {
    name: "",
  },
  reducers: {
    changeTextFilter(state, action) {
      state.name = action.payload;
    },
  },
});
export const selectContactsFilter = (state) => state.filters.name;
export const { changeTextFilter } = slice.actions;
export default slice.reducer;
