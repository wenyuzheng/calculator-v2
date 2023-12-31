import inputSlice, {
  inputAdded,
  inputRemoveLastOne,
  inputReplace,
  inputReset,
} from "../../reduxSlices/inputSlice";

describe("inputSlice", () => {
  test("inputAdded eg1", () => {
    const state = "1";
    const action = inputAdded("100");
    const expected = "1100";
    expect(inputSlice(state, action)).toEqual(expected);
  });

  test("inputAdded eg2", () => {
    const state = "0";
    const action = inputAdded(".");
    const expected = "0.";
    expect(inputSlice(state, action)).toEqual(expected);
  });

  test("inputAdded eg3", () => {
    const state = "0";
    const action = inputAdded("0");
    const expected = "0";
    expect(inputSlice(state, action)).toEqual(expected);
  });

  test("inputAdded eg4", () => {
    const state = "1.";
    const action = inputAdded("0");
    const expected = "1.0";
    expect(inputSlice(state, action)).toEqual(expected);
  });

  test("inputReplace", () => {
    const state = "1";
    const action = inputReplace("x");
    const expected = "x";
    expect(inputSlice(state, action)).toEqual(expected);
  });

  test("inputRemoveLastOne eg1", () => {
    const state = "12345";
    const action = inputRemoveLastOne();
    const expected = "1234";
    expect(inputSlice(state, action)).toEqual(expected);
  });

  test("inputRemoveLastOne eg2", () => {
    const state = "1";
    const action = inputRemoveLastOne();
    const expected = "0";
    expect(inputSlice(state, action)).toEqual(expected);
  });

  test("inputReset", () => {
    const state = "1";
    const action = inputReset();
    const expected = "0";
    expect(inputSlice(state, action)).toEqual(expected);
  });
});
