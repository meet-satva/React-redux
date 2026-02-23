import { createAsyncThunk } from "@reduxjs/toolkit";

const getUsers = async (quary: string, thunkAPI: { rejectWithValue: (value: string) => any }) => {
  try {
    const res = await fetch(`https://dummyjson.com/users/search?q=${quary}`);
    const data = await res.json();
    console.log(data);
    return data.users;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue("Something went wrong");
  }
};

export const fetchUsers = createAsyncThunk("users/search", getUsers);
