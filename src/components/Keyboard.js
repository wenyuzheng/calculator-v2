import Key from "./Key";
import { numbers, operators, equals, clear, del } from "../constants/keys";
import { useDispatch, useSelector } from "react-redux";
import {
  inputAdded,
  inputReplace,
  inputRemoveLastOne,
  inputReset,
} from "../reduxSlices/inputSlice";
import {
  expressionAdded,
  expressionRemoveLastOne,
  expressionReplace,
  expressionReset,
} from "../reduxSlices/expressionSlice";
import { answerReset, answerUpdated } from "../reduxSlices/answerSlice";

const Keyboard = () => {
  const dispatch = useDispatch();

  const inputState = useSelector((state) => state.input);
  const expressionState = useSelector((state) => state.expression);
  const answerState = useSelector((state) => state.answer);

  const handleNumberClick = (text) => {
    if (answerState) {
      dispatch(answerReset());
      dispatch(inputReset());
      dispatch(expressionReset());

      dispatch(inputAdded(text));
      dispatch(expressionAdded(text));
    } else {
      if (inputState.match(/[+\-x/]/)) {
        // To replace the current operator and show number (reset + added = replace function)
        dispatch(inputReset());
      }
      dispatch(inputAdded(text));
      dispatch(expressionAdded(text));
    }
  };

  const handleOperatorClick = (text) => {
    if (answerState) {
      dispatch(expressionReplace(answerState));
      dispatch(answerReset());
    }
    dispatch(inputReplace(text));

    // Not allowed multiple "-"
    if (inputState === "-" && text === "-") {
      return;
    }

    // If the last input is a operator, then replace that operator with the new input operator, unless the new input is "-"
    if (inputState.match(/[+\-x/]/) && text !== "-") {
      const arr = expressionState.split("");
      while (isNaN(arr[arr.length - 1]) && arr[arr.length - 1] !== ".") {
        arr.pop();
      }
      dispatch(expressionReplace(arr.join("")));
    }

    dispatch(expressionAdded(text));
  };

  const handleEqualsClick = () => {
    if (!expressionState.includes("=")) {
      const answer = eval(expressionState.replace(/x/g, "*")).toString();
      dispatch(answerUpdated(answer));
      dispatch(inputReplace(answer));
      dispatch(expressionAdded("=" + answer));
    }
  };

  const handleClearClick = () => {
    dispatch(inputReset());
    dispatch(expressionReset());
    dispatch(answerReset());
  };

  const handleDelClick = () => {
    dispatch(inputRemoveLastOne());
    dispatch(expressionRemoveLastOne());
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
      <Key key={del.id} value={del} onClick={handleDelClick} />
    </div>
  );
};

export default Keyboard;
