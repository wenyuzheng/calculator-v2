import Key from "./Key";
import keys from "../constants/keys";

const Keyboard = () => {
  return (
    <div>
      {keys.map((k) => (
        <Key key={k.id} value={k} />
      ))}
    </div>
  );
};

export default Keyboard;
