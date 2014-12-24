/** @jsx React.DOM */
var React       = require('react');

var Actions     = require('../../actions');

var Events = React.createClass({
    componentDidMount: function() {
        Actions.changePageTitle('Events');
    },
    render: function() {
        return (
            <div className="page"></div>
        );
    }
});

module.exports = Events;
