import { createSlice } from "@reduxjs/toolkit";
const filterSlice = createSlice({
  name: "filets",
  initialState: {
    name: "",
  },
  reducers: {
    setStatusFilter(state, action) {
      state.name = action.payload;
    },
  },
});
export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
