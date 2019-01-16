var React = require('react');

class Result extends React.Component {

    render() {
        return (
            <div style={{width:'360px', height:'90px', fontSize:50, textAlign:'right'}}>{this.props.value}</div>
        );
    }
}

module.exports = Result;