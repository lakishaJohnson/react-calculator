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
      operation: "",
    };
  }

  buttonClicked = (button) => {
    // console.log(button)
    if (button === "=") {
      this.calculate();
    } else 
    if (button === "C") {
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
    } else if (button === "*") {
      this.setState({
        operation: "*",
        result: this.state.result + button,
      });
    } else if (button === "/") {
      this.setState({
        operation: "/",
        result: this.state.result + button,
      });
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculate = () => {
    const arr = this.state.result.split(/\+|-|\*|\//);
    // console.log(arr);
    const [x, y] = arr;
    const { operation } = this.state;

    if (operation === "+") {
      let value = Number(x) + Number(y);
      this.setState({
        result: value.toString(),
      });
    } else if (operation === "-") {
      let value = Number(x) - Number(y);
      this.setState({
        result: value.toString(),
      });
    } else if (operation === "*") {
      let value = Number(x) * Number(y);
      this.setState({
        result: value.toString(),
      });
    } else if (operation === "/") {
      let value = Number(x) / Number(y);
      this.setState({
        result: value.toString(),
      });
      // this.reset()
    // } else if (operation === "%") {
    //   let value = Number(x) + Number(y)
    //   let percent = value / 100;
    //   this.setState({
    //     result: percent,
    //   });
    } else {
      this.setState({
        result: "",
        operation: ""
      });
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
      operation: ""
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
