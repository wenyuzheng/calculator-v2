import { Button } from "react-bootstrap";
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

const Key = ({ value }) => {
  const { id, text, group } = value;
  const dispatch = useDispatch();

  const inputState = useSelector((state) => state.input);
  const expressionState = useSelector((state) => state.expression);

  const handleClick = () => {
    if (text === "AC") {
      dispatch(inputReset());
      dispatch(expressionReset());
    } else if (text === "=" && !expressionState.includes("=")) {
      const answer = "10001";
      dispatch(inputReplace(answer));
      dispatch(expressionAdded("=" + answer));
    } else if (group === "operators") {
      dispatch(inputReplace(text));
      dispatch(expressionAdded(text));
    } else if (group === "numbers") {
      dispatch(inputAdded(text));
      dispatch(expressionAdded(text));
    }
  };

  return (
    <Button id={id} onClick={handleClick}>
      {text}
    </Button>
  );
};

export default Key;
