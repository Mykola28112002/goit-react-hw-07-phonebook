
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://63496d350b382d796c863ce0.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  "contacts/addContacts",
    async ({name,phone}, thunkAPI) => {
    try {
        const response = await axios.post("/contacts", {
            name: name,
            phone: phone
        });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContacts",
    async (contactId, thunkAPI) => {
      console.log(contactId)
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);