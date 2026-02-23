import { createSlice } from "@reduxjs/toolkit";

    interface UiState {
        collapsed: boolean
    };

    const initialState: UiState = {
        collapsed: false,
    }

    const uiSlice = createSlice({
        name: "ui",
        initialState,
        reducers: {
            toggleCollap(state) {
                state.collapsed = !state.collapsed;
            },
            setCollap(state,action) {
                state.collapsed = action.payload;
            }
        }
    });

    export const { toggleCollap, setCollap } = uiSlice.actions;
    export default uiSlice.reducer;