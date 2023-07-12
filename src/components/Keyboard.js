import Key from "./Key";
import keys from "../constants/keys";

const Keyboard = () => {
  return (
    <div>
      {keys.map((k) => (
        <Key key={k.id} id={k.id} text={k.text} />
      ))}
    </div>
  );
};

export default Keyboard;
