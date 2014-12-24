/** @jsx React.DOM */
var React       = require('react');

var Actions     = require('../../actions');

var Team = React.createClass({
    componentDidMount: function() {
        Actions.changePageTitle('Team');
    },
    render: function() {
        return (
            <div className="page"></div>
        );
    }
});

module.exports = Team;
