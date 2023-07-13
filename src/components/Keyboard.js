import Key from "./Key";
import { numbers, operators, equals, clear } from "../constants/keys";
import { useDispatch, useSelector } from "react-redux";
import {
  inputAdded,
  inputReplace,
  inputReset,
} from "../reduxSlices/inputSlice";
import {
  expressionAdded,
  expressionReset,
} from "../reduxSlices/expressionSlice";

const Keyboard = () => {
  const dispatch = useDispatch();

  const inputState = useSelector((state) => state.input);
  const expressionState = useSelector((state) => state.expression);

  const handleNumberClick = (text) => {
    dispatch(inputAdded(text));
    dispatch(expressionAdded(text));
  };

  const handleOperatorClick = (text) => {
    dispatch(inputReplace(text));
    dispatch(expressionAdded(text));
  };

  const handleEqualsClick = () => {
    if (!expressionState.includes("=")) {
      const answer = "10001";
      dispatch(inputReplace(answer));
      dispatch(expressionAdded("=" + answer));
    }
  };

  const handleClearClick = () => {
    dispatch(inputReset());
    dispatch(expressionReset());
  };

  return (
    <div>
      {numbers.map((k) => (
        <Key key={k.id} value={k} onClick={() => handleNumberClick(k.text)} />
      ))}

      {operators.map((k) => (
        <Key key={k.id} value={k} onClick={() => handleOperatorClick(k.text)} />
      ))}

      <Key key={equals.id} value={equals} onClick={handleEqualsClick} />
      <Key key={clear.id} value={clear} onClick={handleClearClick} />
    </div>
  );
};

export default Keyboard;
