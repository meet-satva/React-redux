import {createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/userThunk.ts';
import type { PayloadAction } from '@reduxjs/toolkit';

interface User {
   id: number,
   firstName: string,
   lastName: string,
   age: number,
   email: string,
};

interface UserState {
    users: User[],
    loading: boolean,
    error: string | null,
};

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
};


const UserList = createSlice({
    name: "UserList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchUsers.fulfilled, (state,action: PayloadAction<User[]>) => {
            state.loading = false;
            state.users = action.payload; 
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? "Failed to fetch users";
        })
    }
});

export default UserList.reducer;