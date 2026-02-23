import { configureStore } from "@reduxjs/toolkit";
import userListSlice from "./slices/userListSlice.ts";

export const store = configureStore({
    reducer: {
        UserList: userListSlice
    }
});     

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type store = typeof store;