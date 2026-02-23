import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface UserState {
  id: number,
  name: string,
  email: string,
  role: string
}

interface UserSliceState {
  users: UserState[];
}

const initialState : UserSliceState= {
  users: [
  {
    id: 1,
    name: "Rajesh",
    email: "rajesh123@gmail.com",
    role: "qa",
  },
  {
    id: 2,
    name: "Meet",
    email: "meet123@gmail.com",
    role: "developer",
  },
  {
    id: 3,
    name: "Keval",
    email: "keval35@gmail.com",
    role: "pm",
  },
  {
    id: 4,
    name: "mayank",
    email: "mayank333@gmail.com",
    role: "manager",
  },
  {
    id: 5,
    name: "jayesh",
    email: "jayesh230@gmail.com",
    role: "ba",
  },
],
};

const Userdetails = createSlice({
  name: "Userdetails",
  initialState,

  reducers: {
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { deleteUser } = Userdetails.actions;
export default Userdetails.reducer;
