import React from "react"; 

class Results extends React.Component {

    render () {
        let {result} = this.props;
        return (
        <div className="result">
        <h2>{ result }</h2>
        </div>
        )
    }
}

export default Results;