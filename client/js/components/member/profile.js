/** @jsx React.DOM */
var React       = require('react');

var Actions     = require('../../actions');

var Profile = React.createClass({
    componentDidMount: function() {
        Actions.changePageTitle('Profile');
    },
    render: function() {
        return (
            <div></div>
        );
    }
});

module.exports = Profile;
