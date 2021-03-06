var React = require('react');
var Result = require('./Result.jsx');
var KeyBoard = require('./KeyBoard.jsx');

class Calculator extends React.Component {
    constructor(props){
        super(props);

        this.state = { 
            result: 0,
            numberToRemember: 0,
            action: '',
            clearResult: false
        };

        this.pressNumber = this.pressNumber.bind(this);
        this.pressAction = this.pressAction.bind(this);
    }

    pressNumber(number) {
        this.setState((state) => {
            if (state.clearResult) {
                return {
                    numberToRemember: state.result,
                    result: number,
                    clearResult: false
                };
            }
            if (state.result == '0') {
                return {result: number};
            } else {
                return {result: state.result + number};
            }
        });
        
    }

    pressAction(action) {
        this.setState((state) => {
            if (action == "C") {
                return {
                    result: 0,
                    numberToRemember: 0,
                    action: '',
                    clearResult: false
                };
            }
            if(action == "<=") {
                var length = state.result.toString().length;
                var newResult = length > 1 ? state.result.substring(0, length-1) : 0;

                return {
                    result: newResult,
                };
            }

            if (state.action) {
                var newResult = state.result;
                switch(state.action) {
                    case '+':
                        newResult = Number(state.numberToRemember) + Number(newResult);
                        break;
                    case '-':
                        newResult = state.numberToRemember - newResult;
                        break;
                    case '*':
                        newResult *= state.numberToRemember;
                        break;
                    case '/':
                        newResult = state.numberToRemember/newResult;
                        break;
                }
                return {
                    result: newResult,
                    clearResult: true,
                    action: action == '=' ? '' : action
                };
            } else {
                return {
                    action: action,
                    clearResult: true
                };
            }
            });
        }

    render() {
        return (
            <div>
                <Result value={this.state.result}/>
                <KeyBoard onButtonPress={this.pressNumber} onActionButtonPress={this.pressAction}/>
            </div>
        );
    }
}

module.exports = Calculator;