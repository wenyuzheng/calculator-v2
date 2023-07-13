import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { inputAdded, inputReset } from "../reduxSlices/inputSlice";

const Key = ({ id, text }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (text === "AC") {
      dispatch(inputReset());
    } else {
      dispatch(inputAdded(text));
    }
  };

  return (
    <Button id={id} onClick={handleClick}>
      {text}
    </Button>
  );
};

export default Key;
