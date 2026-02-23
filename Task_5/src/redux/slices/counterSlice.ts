    import { createSlice } from "@reduxjs/toolkit";
    import type { RootState } from "../store";
    import type { PayloadAction } from "@reduxjs/toolkit";

    export interface CounterState {
        count: number,
        previousValue: number | null,
        switch: boolean,
    }

    const initialState : CounterState = {
        count: 0,
        previousValue: null,
        switch: false,
    }

    const Counter = createSlice({
        name: "counter",
        initialState,
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
            setValue: (state, action: PayloadAction<number>) => {
                state.previousValue = state.count;
                state.count = action.payload;
            },
            toggleSwitch(state) {
                state.switch = !state.switch;
            }
        },    
    });

    export const { increment, decrement, reset, setValue, toggleSwitch } = Counter.actions;
    export const selectCount = (state: RootState) =>
  state.counter.count;

export const selectPreviousValue = (state: RootState) =>
  state.counter.previousValue;
    export default Counter.reducer; 