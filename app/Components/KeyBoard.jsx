var React = require('react');
var Button = require('./Button.jsx');

class KeyBoard extends React.Component {

    render() {
        return (
            <div>
                <Button />
                <Button />
            </div>
        );
    }
}

module.exports = KeyBoard;