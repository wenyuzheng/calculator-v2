import inputSlice, {
  inputAdded,
  inputUpdate,
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

  test("inputUpdate", () => {
    const state = "1";
    const action = inputUpdate("100");
    const expected = "100";
    expect(inputSlice(state, action)).toEqual(expected);
  });

  test("inputReset", () => {
    const state = "1";
    const action = inputReset();
    const expected = "0";
    expect(inputSlice(state, action)).toEqual(expected);
  });
});
