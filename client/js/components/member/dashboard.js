/** @jsx React.DOM */
var React       = require('react');

var Actions     = require('../../actions');

var Dashboard = React.createClass({
    componentDidMount: function() {
        Actions.changePageTitle('Dashboard');
    },
    render: function() {
        return (
            <div></div>
        );
    }
});

module.exports = Dashboard;
