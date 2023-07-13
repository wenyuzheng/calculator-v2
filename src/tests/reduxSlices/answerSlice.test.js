import answerSlice, {
  answerUpdated,
  answerReset,
} from "../../reduxSlices/answerSlice";

describe("answerSlice", () => {
  test("answerUpdated eg1", () => {
    const state = "1";
    const action = answerUpdated("23");
    const expected = "23";
    expect(answerSlice(state, action)).toEqual(expected);
  });

  test("answerReset eg1", () => {
    const state = "1";
    const action = answerReset();
    const expected = "";
    expect(answerSlice(state, action)).toEqual(expected);
  });
});
