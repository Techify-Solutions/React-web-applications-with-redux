import { createSlice } from “@reduxjs/toolkit”;

const initialState = {
  bugs: [],
};

export const bugSlice = createSlice({
  name: “bugs”,
  initialState,
  reducers: {
    addBug: (state, action) => {
      state.bugs = […state.bugs, action.payload];
    },
    removeBug: (state, action) => {
    state.bugs = state.bugs.filter((bug) => bug.id !== action.payload);
    },
  },
});

export const { addBug, removeBug } = bugSlice.actions;
export default bugSlice.reducer;
