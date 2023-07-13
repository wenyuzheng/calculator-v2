import { useSelector } from "react-redux";

const Display = () => {
  const input = useSelector((state) => state.input);
  const expression = useSelector((state) => state.expression);

  return (
    <div id="display">
      <div id="expression">{expression}</div>
      <div id="input">{input}</div>
    </div>
  );
};

export default Display;
