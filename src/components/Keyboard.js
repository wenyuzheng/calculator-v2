import Key from "./Key";
import { numbers, operators, equals, clear, del } from "../constants/keys";
import { useDispatch, useSelector } from "react-redux";
import {
  inputAdded,
  inputReplace,
  inputRemoveLastOne,
  inputReset,
} from "../reduxSlices/inputSlice";
import {
  expressionAdded,
  expressionRemoveLastOne,
  expressionReplace,
  expressionReset,
} from "../reduxSlices/expressionSlice";
import { answerReset, answerUpdated } from "../reduxSlices/answerSlice";
import { Container, Row, Col } from "react-bootstrap";
import "./css/Keyboard.css";

const Keyboard = () => {
  const dispatch = useDispatch();

  const inputState = useSelector((state) => state.input);
  const expressionState = useSelector((state) => state.expression);
  const answerState = useSelector((state) => state.answer);

  const handleNumberClick = (text) => {
    if (answerState) {
      dispatch(answerReset());
      dispatch(inputReset());
      dispatch(expressionReset());

      dispatch(inputAdded(text));
      dispatch(expressionAdded(text));
    } else {
      if (inputState.match(/[+\-x/]/)) {
        // To replace the current operator and show number (reset + added = replace function)
        dispatch(inputReset());
      }
      dispatch(inputAdded(text));
      dispatch(expressionAdded(text));
    }
  };

  const handleOperatorClick = (text) => {
    if (answerState) {
      dispatch(expressionReplace(answerState));
      dispatch(answerReset());
    }
    dispatch(inputReplace(text));

    // Not allowed multiple "-"
    if (inputState === "-" && text === "-") {
      return;
    }

    // If the last input is a operator, then replace that operator with the new input operator, unless the new input is "-"
    if (inputState.match(/[+\-x/]/) && text !== "-") {
      const arr = expressionState.split("");
      while (isNaN(arr[arr.length - 1]) && arr[arr.length - 1] !== ".") {
        arr.pop();
      }
      dispatch(expressionReplace(arr.join("")));
    }

    dispatch(expressionAdded(text));
  };

  const handleEqualsClick = () => {
    if (!expressionState.includes("=")) {
      let answer = "0";
      try {
        answer = eval(expressionState.replace(/x/g, "*")).toString();
      } catch (e) {
        alert(e.message);
        return;
      }

      dispatch(answerUpdated(answer));
      dispatch(inputReplace(answer));
      dispatch(expressionAdded("=" + answer));
    }
  };

  const handleClearClick = () => {
    dispatch(inputReset());
    dispatch(expressionReset());
    dispatch(answerReset());
  };

  const handleDelClick = () => {
    dispatch(inputRemoveLastOne());
    dispatch(expressionRemoveLastOne());
  };

  return (
    <Container style={{ width: 300 }}>
      <Row>
        <Col sm={12}>
          <Row className="no-gutters">
            <Col xs={6}>
              <Key key={clear.id} value={clear} onClick={handleClearClick} />
            </Col>
            <Col xs={6}>
              <Key key={del.id} value={del} onClick={handleDelClick} />
            </Col>
          </Row>
        </Col>
        <Col xs={9}>
          <Row className="no-gutters">
            {numbers.map((k, index) => (
              <Col key={index} xs={4}>
                <Key
                  key={k.id}
                  value={k}
                  onClick={() => handleNumberClick(k.text)}
                />
              </Col>
            ))}
            <Col xs={4}>
              <Key key={equals.id} value={equals} onClick={handleEqualsClick} />
            </Col>
          </Row>
        </Col>
        <Col xs={3}>
          <Row className="no-gutters">
            {operators.map((k, index) => (
              <Col key={index} xs={12}>
                <Key
                  key={k.id}
                  value={k}
                  onClick={() => handleOperatorClick(k.text)}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Keyboard;
