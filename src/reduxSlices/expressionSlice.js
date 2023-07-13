import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const expressionSlice = createSlice({
  name: "expression",
  initialState,
  reducers: {
    expressionAdded(state, action) {
      state += action.payload;
      return state;
    },
    expressionRemoveLastOne(state, action) {
      return state.substring(0, state.length - 1);
    },
    expressionReset(state, action) {
      return "";
    },
  },
});

export const { expressionAdded, expressionRemoveLastOne, expressionReset } =
  expressionSlice.actions;

export default expressionSlice.reducer;
