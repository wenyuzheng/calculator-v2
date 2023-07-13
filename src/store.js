import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./reduxSlices/inputSlice";
import expressionSlice from "./reduxSlices/expressionSlice";
import answerSlice from "./reduxSlices/answerSlice";

const store = configureStore({
  reducer: {
    input: inputSlice,
    expression: expressionSlice,
    answer: answerSlice,
  },
});

export default store;
