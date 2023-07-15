import { Container } from "react-bootstrap";
import "./App.css";
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";

function App() {
  return (
    <Container
      className="App"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        style={{
          width: 300,
          backgroundColor: "rgb(102, 102, 102)",
          padding: 10,
        }}
      >
        <Display />
        <Keyboard />
      </Container>
    </Container>
  );
}

export default App;
