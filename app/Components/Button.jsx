var React = require('react');

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handleButtonPress = this.handleButtonPress.bind(this);
    }

    handleButtonPress(e) {
        console.log("Button " + this.props.value + " has been pressed");
        this.props.onButtonPress(this.props.value);
    }

    render() {
        return (
            <button style={{height:'90px', width:'90px', fontSize:50}} onClick={this.handleButtonPress}>{this.props.value}</button>
        );
    }
}

module.exports = Button;