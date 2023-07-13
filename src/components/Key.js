import { Button } from "react-bootstrap";

const Key = ({ value, onClick }) => {
  const { id, text } = value;

  return (
    <Button id={id} onClick={onClick}>
      {text}
    </Button>
  );
};

export default Key;
