var React = require('react');
var Result = require('./Result.jsx');
var KeyBoard = require('./KeyBoard.jsx');

class Calculator extends React.Component {
    constructor(props){
        super(props);
        
        this.state = { result: 0 };
    }

    render() {
        return (
            <div>
                <Result value={this.state.result}/>
                <KeyBoard />
            </div>
        );
    }
}

module.exports = Calculator;