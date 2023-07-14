import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const expressionSlice = createSlice({
  name: "expression",
  initialState,
  reducers: {
    expressionAdded(state, action) {
      const nums = state.split(/[+\-x/]/);
      const currNum = nums[nums.length - 1];

      if (action.payload === ".") {
        if (currNum.includes(".")) {
          return state;
        } else if (currNum.length === 0) {
          state += "0";
        }
      }

      state += action.payload;
      return state;
      // return state.length <= 1 ? parseFloat(state).toString() : state;
    },
    expressionReplace(state, action) {
      return action.payload;
    },
    expressionRemoveLastOne(state) {
      return state.substring(0, state.length - 1);
    },
    expressionReset() {
      return initialState;
    },
  },
});

export const {
  expressionAdded,
  expressionReplace,
  expressionRemoveLastOne,
  expressionReset,
} = expressionSlice.actions;

export default expressionSlice.reducer;
