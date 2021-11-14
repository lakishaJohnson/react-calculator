import React from "react";

class NumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  handleInputChange(event) {
    const value = event.target.value;
    this.setState({ value });
    this.props.onChange(Number(value));
  }

  render() {
    const { name, label } = this.props;

    return (
      <label htmlFor={name}>
        {label}
        <input
          id={name}
          type="number"
          name={name}
          required
          value={this.state.value}
          onChange={this.handleInputChange}
        />
      </label>
    );
  }
}

export default NumberInput;
