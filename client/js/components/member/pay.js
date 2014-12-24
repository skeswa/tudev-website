/** @jsx React.DOM */
var React       = require('react');

var Actions     = require('../../actions');

var Pay = React.createClass({
    componentDidMount: function() {
        Actions.changePageTitle('Pay');
    },
    render: function() {
        return (
            <div></div>
        );
    }
});

module.exports = Pay;
