import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: false,
    siderCollapsed: false,
}

const theameSlice = createSlice({
    name: "theameSlice",
    initialState: initialState,
     reducers: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
    toggleSider(state) {
      state.siderCollapsed = !state.siderCollapsed;
    }
  }
});

export const { toggleDarkMode, toggleSider } = theameSlice.actions;
export default theameSlice.reducer;