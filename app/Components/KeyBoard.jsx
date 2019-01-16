var React = require('react');
var Button = require('./Button.jsx');

class KeyBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <Button value='1'
                        onButtonPress={this.props.onButtonPress}
                        key='1'/>
                    <Button value='2'
                        onButtonPress={this.props.onButtonPress}
                        key='2'/>
                    <Button value='3'
                        onButtonPress={this.props.onButtonPress}
                        key='3'/>
                    <Button value='+'
                        onButtonPress={this.props.onActionButtonPress}
                        key='+'/>
                </div>
                <div>
                    <Button value='4'
                        onButtonPress={this.props.onButtonPress}
                        key='4'/>
                    <Button value='5'
                        onButtonPress={this.props.onButtonPress}
                        key='5'/>
                    <Button value='6'
                        onButtonPress={this.props.onButtonPress}
                        key='6'/>
                    <Button value='-'
                        onButtonPress={this.props.onActionButtonPress}
                        key='-'/>
                </div>
                <div>
                    <Button value='7'
                        onButtonPress={this.props.onButtonPress}
                        key='7'/>
                    <Button value='8'
                        onButtonPress={this.props.onButtonPress}
                        key='8'/>
                    <Button value='9'
                        onButtonPress={this.props.onButtonPress}
                        key='9'/>
                    <Button value='*'
                        onButtonPress={this.props.onActionButtonPress}
                        key='*'/>
                </div>
                <div>
                    <Button value='.'
                        onButtonPress={this.props.onButtonPress}
                        key='.'/>
                    <Button value='0'
                        onButtonPress={this.props.onButtonPress}
                        key='0'/>
                    <Button value='='
                        onButtonPress={this.props.onActionButtonPress}
                        key='='/>
                    <Button value='/'
                        onButtonPress={this.props.onActionButtonPress}
                        key='/'/>
                </div>
            </div>
        );
    }
}

module.exports = KeyBoard;