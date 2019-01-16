var React = require('react');
var Button = require('./Button.jsx');

class KeyBoard extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <Button value='1'
                        type='value'
                        key='1'/>
                    <Button value='2'
                        type='value'
                        key='2'/>
                    <Button value='3'
                        type='value'
                        key='3'/>
                    <Button value='+'
                        type='action'
                        key='+'/>
                </div>
                <div>
                    <Button value='4'
                        type='value'
                        key='4'/>
                    <Button value='5'
                        type='value'
                        key='5'/>
                    <Button value='6'
                        type='value'
                        key='6'/>
                    <Button value='-'
                        type='action'
                        key='-'/>
                </div>
                <div>
                    <Button value='7'
                        type='value'
                        key='7'/>
                    <Button value='8'
                        type='value'
                        key='8'/>
                    <Button value='9'
                        type='value'
                        key='9'/>
                    <Button value='*'
                        type='action'
                        key='*'/>
                </div>
                <div>
                    <Button value='.'
                        type='value'
                        key='.'/>
                    <Button value='0'
                        type='value'
                        key='0'/>
                    <Button value='c'
                        type='value'
                        key='c'/>
                    <Button value='='
                        type='action'
                        key='='/>
                </div>
            </div>
        );
    }
}

module.exports = KeyBoard;