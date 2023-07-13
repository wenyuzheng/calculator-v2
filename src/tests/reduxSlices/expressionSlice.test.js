import expressionSlice, {
  expressionAdded,
  expressionReplace,
  expressionRemoveLastOne,
  expressionReset,
} from "../../reduxSlices/expressionSlice";

describe("expressionSlice", () => {
  test("expressionAdded eg1", () => {
    const state = "1";
    const action = expressionAdded("100");
    const expected = "1100";
    expect(expressionSlice(state, action)).toEqual(expected);
  });

  test("expressionReplace eg1", () => {
    const state = "1";
    const action = expressionReplace("3");
    const expected = "3";
    expect(expressionSlice(state, action)).toEqual(expected);
  });

  test("expressionRemoveLastOne eg1", () => {
    const state = "12345";
    const action = expressionRemoveLastOne();
    const expected = "1234";
    expect(expressionSlice(state, action)).toEqual(expected);
  });

  test("expressionReset eg1", () => {
    const state = "1";
    const action = expressionReset();
    const expected = "";
    expect(expressionSlice(state, action)).toEqual(expected);
  });
});
