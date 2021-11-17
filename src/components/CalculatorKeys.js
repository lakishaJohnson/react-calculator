import React from "react";

const keys = [
  { id: "invert", keyType: "operator", value: "+/-" },
  { id: "clear", keyType: "function", value: "C" },
  { id: "multiply", keyType: "operator", value: "*" },
  { id: "minus", keyType: "operator", value: "-" },
  { id: "9", keyType: "number", value: "9" },
  { id: "8", keyType: "number", value: "8" },
  { id: "7", keyType: "number", value: "7" },
  { id: "add", keyType: "operator", value: "+" },,
  { id: "6", keyType: "number", value: "6" },
  { id: "5", keyType: "number", value: "5" },
  { id: "4", keyType: "number", value: "4" },
  { id: "divide", keyType: "operator", value: "/" },
  { id: "3", keyType: "number", value: "3" },
  { id: "2", keyType: "number", value: "2" },
  { id: "1", keyType: "number", value: "1" },
  { id: "dot", keyType: "number", value: "." },
  { id: "0", keyType: "number", value: "0" },
  { id: "%", keyType: "number", value: "%" },
  { id: "allClear", keyType: "function", value: "AC" },
  { id: "total", keyType: "function", value: "=" },
];

class CalculatorKeys extends React.Component {

  render() {
    return (
      <div className="keyboard">
        {keys.map((key, i) => {
          return (
            <button
              className="buttons"
              id={key.id}
              key={i}
              keyType={key.keyType}
              value={key.value}
              onClick={(event) => this.props.buttonClicked(event.target.value)}
            >
              {key.value}
            </button>
          );
        })}
      </div>
    );
  }
}

export default CalculatorKeys;
