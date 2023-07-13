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

const Key = ({ value, onClick }) => {
  const { id, text } = value;

  return (
    <Button id={id} onClick={onClick}>
      {text}
    </Button>
  );
};

export default Key;
