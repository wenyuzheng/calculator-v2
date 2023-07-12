import { useSelector } from "react-redux";

const Display = () => {
  const input = useSelector((state) => state.input);

  return <div id="display">{input}</div>;
};

export default Display;
