    import { createSlice } from "@reduxjs/toolkit";

    const Counter = createSlice({
        name: "counter",
        initialState: {
            count: 0,
            previousValue: null,
        },
        reducers: {
            increment: (state) => {
                state.previousValue = state.count;
                state.count += 1;
            },
            decrement: (state) => {
                state.previousValue = state.count;
                state.count -= 1;
            },
            reset: (state) => {
                state.previousValue = state.count;
                state.count = 0;
            },
            setValue: (state, action) => {
                state.previousValue = state.count;
                state.count = action.payload;
            },
        },    
    });

    export const { increment, decrement, reset, setValue } = Counter.actions;
    export default Counter.reducer; 