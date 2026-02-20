import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theameSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer
  }
});