import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { inputAdded, inputReset } from "../reduxSlices/inputSlice";
import {
  expressionAdded,
  expressionReset,
} from "../reduxSlices/expressionSlice";

const Key = ({ id, text }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (text === "AC") {
      dispatch(inputReset());
      dispatch(expressionReset());
    } else {
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
