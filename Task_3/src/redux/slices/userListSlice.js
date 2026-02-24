import {createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/userThunk';

const UserList = createSlice({
    name: "UserList",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },//users/search.pendst
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchUsers.fulfilled, (state,action) => {
            state.loading = false;
            state.users = action.payload; 
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload; 
        })
    }
});

export default UserList.reducer;