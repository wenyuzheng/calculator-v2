import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./css/Display.css";

const Display = () => {
  const input = useSelector((state) => state.input);
  const expression = useSelector((state) => state.expression);

  return (
    <Container id="display-screen" style={{ fontSize: 20, color: "white" }}>
      <div id="expression" style={{ minHeight: 30 }}>
        {expression}
      </div>
      <div id="display">{input}</div>
    </Container>
  );
};

export default Display;
