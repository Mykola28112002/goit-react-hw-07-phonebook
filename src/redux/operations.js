
// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";
// export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
//   const response = await axios.get("/contacts");
//   return response.data;
// });

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://63496d350b382d796c863ce0.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
  async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  "contacts/addContacts",
    async ({name,id,phone}, thunkAPI) => {
        console.log(id)
    try {
        const response = await axios.post("/contacts", {
            name: name,
            phone: phone
        });
        console.log(response)
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