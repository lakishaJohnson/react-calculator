import React from 'react';
import Heading from './components/Heading';
import './App.css';
import CalculatorKeys from './components/CalculatorKeys';
import Results from './components/Results';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: "",
      history: "",
    }
  }

  buttonClicked = button => {
    if(button === "=") {
      this.calculate()
    } else if (button === "CE") {
      this.backspace()
    } else if (button === "C") {
      this.reset()
    } else {
      this.setState({
        result: this.state.result + button
      })
    } 
  }
  // calculate = () => {}

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }
  
  reset = () => {
    this.setState({
      result: "",
    })
  }
    

  render() {
    return (
        <div className="App">
      <Heading />
      <Results result={this.state.result}/>
      <CalculatorKeys buttonClicked={this.onClick}/>
    </div>
   ); 
  }
}
  
export default App;

  


/**function Display(props){
    return (
        <div className = 'containerDisplay'>
            <p className = 'numeros'>{props.numero1} {props.operador} {props.numero2}</p>
            <p className = 'resultado'>{props.resultado}</p>
        </div>
    )
} */