import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseUrl = "https://connections-api.goit.global/";

export const register = createAsyncThunk(
  "auth/register",
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", newUser);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk("auth/login", async (creds, thunkAPI) => {
  try {
    const response = await axios.post("/users/login", creds);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const logOut = createAsyncThunk("auth/logout", async () => {});
