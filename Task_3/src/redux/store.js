import { configureStore } from "@reduxjs/toolkit";
import userListSlice from "./slices/userListSlice";

export const store = configureStore({
    reducer: {
        UserList: userListSlice
    }
});     