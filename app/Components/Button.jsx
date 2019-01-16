var React = require('react');

class Button extends React.Component {

    render() {
        return (
            <button style={{height:'90px', width:'90px', fontSize:50}}>{this.props.value}</button>
        );
    }
}

module.exports = Button;