var React = require('react');

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handleButtonPress = this.handleButtonPress.bind(this);
    }

    handleButtonPress(e) {
        this.props.onButtonPress(this.props.value);
    }

    render() {
        var width = 90 * this.props.size;

        const buttonStyle = {
            height: '90px',
            width: width + 'px',
            fontSize: 50
        };

        return (
            <button style={buttonStyle} onClick={this.handleButtonPress}>{this.props.value}</button>
        );
    }
}

module.exports = Button;