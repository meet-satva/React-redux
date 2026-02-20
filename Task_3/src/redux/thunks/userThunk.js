import { createAsyncThunk } from "@reduxjs/toolkit";

const getUsers = async (quary, thunkAPI) => {
  try {
    const res = await fetch(`https://dummyjson.com/users/search?q=${quary}`);
    const data = await res.json();
    console.log(data);
    return data.users;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const fetchUsers = createAsyncThunk("users/search", getUsers);
