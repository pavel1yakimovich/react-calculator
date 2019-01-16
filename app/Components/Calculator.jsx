var React = require('react');
var Result = require('./Result.jsx');
var KeyBoard = require('./KeyBoard.jsx');

class Calculator extends React.Component {
    constructor(props){
        super(props);

        this.state = { result: 0 };
        this.pressNumber = this.pressNumber.bind(this);
    }

    pressNumber(number) {
        console.log("pressNumber from calculator");
        console.log(number);
        if (this.state.result == '0') {
            this.setState({
                result: number
            });
        } else {
            console.log(this.state.result + number);
            console.log(this.state.result);
            this.setState((state) => {
                return {result: state.result + number};
            });
        }
    }

    render() {
        return (
            <div>
                <Result value={this.state.result}/>
                <KeyBoard onButtonPress={this.pressNumber}/>
            </div>
        );
    }
}

module.exports = Calculator;