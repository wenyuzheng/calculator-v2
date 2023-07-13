import expressionSlice, {
  expressionAdded,
  expressionReset,
} from "../../reduxSlices/expressionSlice";

describe("expressionSlice", () => {
  test("expressionAdded eg1", () => {
    const state = "1";
    const action = expressionAdded("100");
    const expected = "1100";
    expect(expressionSlice(state, action)).toEqual(expected);
  });

  test("expressionReset eg1", () => {
    const state = "1";
    const action = expressionReset();
    const expected = "";
    expect(expressionSlice(state, action)).toEqual(expected);
  });
});
