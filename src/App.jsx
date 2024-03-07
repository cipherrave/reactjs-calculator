import { useState } from "react";
import { evaluate, sqrt, square, pow } from "mathjs";
import myLogo from "./assets/logo.svg";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";

function App() {
  const [number, setNumber] = useState(0);
  const [answer, setAnswer] = useState(0);

  function insert(Num) {
    setNumber(String(number + Num));
  }

  function oneOverX() {
    setAnswer(pow(number, -1));
  }

  function squared() {
    setAnswer(square(number));
  }

  function squareRoot() {
    setAnswer(sqrt(number));
  }

  function clear() {
    setNumber(0);
    if (number === 0) {
      setAnswer(0);
    }
  }

  function calculate() {
    setAnswer(evaluate(number));
  }

  return (
    <main>
      <div className="calcBody">
        <div className="display">
          <div className="logo">
            <img
              src={myLogo}
              style={{ width: "15px", marginLeft: "4px", cursor: "pointer" }}
            />
            <h1 style={{ fontSize: "15px" }}>Calculator</h1>
          </div>
          <p style={{ fontSize: "40px", display: "block" }}>{number}</p>
          <h3>{answer}</h3>
        </div>
        <div className="buttons">
          <div className="buttonRow">
            <button onClick={oneOverX} style={{ backgroundColor: "#626262" }}>
              1/x
            </button>
            <button onClick={squared} style={{ backgroundColor: "#626262" }}>
              x²
            </button>
            <button onClick={squareRoot} style={{ backgroundColor: "#626262" }}>
              ²√x
            </button>
            <button
              onClick={() => insert("+")}
              style={{ backgroundColor: "#626262" }}
            >
              +
            </button>
          </div>
          <div className="buttonRow">
            <button onClick={() => insert(7)}>7</button>
            <button onClick={() => insert(8)}>8</button>
            <button onClick={() => insert(9)}>9</button>
            <button
              onClick={() => insert("-")}
              style={{ backgroundColor: "#626262" }}
            >
              -
            </button>
          </div>
          <div className="buttonRow">
            <button onClick={() => insert(4)}>4</button>
            <button onClick={() => insert(5)}>5</button>
            <button onClick={() => insert(6)}>6</button>
            <button
              onClick={() => insert("*")}
              style={{ backgroundColor: "#626262" }}
            >
              x
            </button>
          </div>
          <div className="buttonRow">
            <button onClick={() => insert(1)}>1</button>
            <button onClick={() => insert(2)}>2</button>
            <button onClick={() => insert(3)}>3</button>
            <button
              onClick={() => insert("/")}
              style={{ backgroundColor: "#626262" }}
            >
              /
            </button>
          </div>
          <div className="buttonRow">
            <button
              onClick={clear}
              style={{
                backgroundColor: "#cb0404",
                borderRadius: "0 0 0 20px",
              }}
            >
              C
            </button>
            <button onClick={() => insert(0)}>0</button>
            <button onClick={() => insert(".")}>.</button>
            <button
              onClick={calculate}
              style={{ backgroundColor: "#fe6c00", borderRadius: "0 0 20px 0" }}
            >
              =
            </button>
          </div>
        </div>
      </div>
      <div className="footer">
        <p style={{ fontSize: "15px" }}>Created using</p>
        <img src={reactLogo} style={{ width: "15px" }} />
        <img src={viteLogo} style={{ width: "15px" }} />
      </div>
    </main>
  );
}

export default App;
