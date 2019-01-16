var React = require('react');
var Result = require('./Result.jsx');
var KeyBoard = require('./KeyBoard.jsx');

class Calculator extends React.Component {

    render() {
        return (
            <div>
                <Result />
                <KeyBoard />
            </div>
        );
    }
}

module.exports = Calculator;