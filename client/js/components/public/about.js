/** @jsx React.DOM */
var React       = require('react');

var Actions     = require('../../actions');

var About = React.createClass({
    componentDidMount: function() {
        Actions.changePageTitle('About');
    },
    render: function() {
        return (
            <div id="about" className="page"></div>
        );
    }
});

module.exports = About;
