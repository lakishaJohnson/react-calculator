import React from "react";
import Heading from "./components/Heading";
import "./App.css";
import CalculatorKeys from "./components/CalculatorKeys";
import Results from "./components/Results";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      // x: "0",
      // y: "0",
      operation: "",
    };
  }

  buttonClicked = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.backspace();
    } else if (button === "AC") {
      this.reset();
    } else if (button === "+") {
      this.setState({
        operation: "+",
        result: this.state.result + button,
      });
    } else if (button === "-") {
      this.setState({
        operation: "-",
        result: this.state.result + button,
      });
      // // else if (button === "+/-") {
      // //   let result = this.state.result.split()
      // //   lastInput = result[result.length -1]
      // //   if(lastInput === parseInt())
      // // }
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculate = () => {
    const arr = this.state.result.split(/\+|-|\*|\//);
    console.log(arr);
    const [x, y] = arr;
    const { operation } = this.state;
    // console.log("x: " + x, "y: " + y);

    if (operation === "+") {
      let value = Number(x) + Number(y);
      this.setState({
        result: value,
      });
    } else if (operation === "-") {
      const arr = this.state.result.split("-");
      const [x, y] = arr;
      let value = Number(x) - Number(y);
      this.setState({
        result: Number(value),
      });
    } else if (operation === "*") {
      const arr = this.state.result.split("*");
      const [x, y] = arr;
      let value = Number(x) * Number(y);
      this.setState({
        result: Number(value),
      });
    } else if (operation === "/") {
      let value = Number(x) / Number(y);
      this.setState({
        result: Number(value),
      });
    } else {
      return null;
    }
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  render() {
    console.log(this.state.result);
    return (
      <div className="App">
        <Heading />
        <Results result={this.state.result} />
        <CalculatorKeys buttonClicked={this.buttonClicked} />
      </div>
    );
  }
}

export default App;
