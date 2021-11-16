import React from "react";

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: this.props.value,
    };
  }

  handleInputChange(event) {
    console.log(event.target);
    const result = event.target.value;
    this.setState({ result });
    this.props.onChange((result));
  }

  render() {
    let { result } = this.props;
    return (
      <div className="result">
        <input
          id="values"
          name="values"
          type="text"
          placeholder="0"
          value={result}
          onChange={(event) => this.props.handleInputChange(event.target.value)}
        />
      </div>
    );
  }
}

export default Results;
