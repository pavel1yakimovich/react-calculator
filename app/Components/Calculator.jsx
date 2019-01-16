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
                console.log("new number to remember: " + state.result);
                console.log("new result: " + number);
                return {
                    numberToRemember: state.result,
                    result: number,
                    clearResult: false
                };
            }
            if (state.result == '0') {
                return {result: number};
            } else {
                console.log("new state " + this.state.result + number);
                return {result: state.result + number};
            }
        });
        
    }

    pressAction(action) {
        this.setState((state) => {
            if (state.action) {
                var newResult = state.result;
                switch(state.action) {
                    case '+':
                        console.log('previous is +');
                        console.log("new is " + action);
                        newResult = Number(state.numberToRemember) + Number(newResult);
                        break;
                    case '-':
                        console.log('previous is -');
                        console.log("new is" + action);
                        console.log(state);
                        newResult = state.numberToRemember - newResult;
                        console.log("new result: " + newResult)
                        break;
                    case '*':
                        console.log('previous is *');
                        console.log("new is " + action);
                        newResult *= state.numberToRemember;
                        break;
                    case '/':
                        console.log('previous is /');
                        console.log("new is " + action);
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