import { Button } from "react-bootstrap";

const Key = ({ value, onClick }) => {
  const { id, text } = value;

  return (
    <Button id={id} onClick={onClick} className="btn btn-lg w-100 h-100">
      {text}
    </Button>
  );
};

export default Key;
