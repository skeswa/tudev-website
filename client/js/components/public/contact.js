/** @jsx React.DOM */
var React       = require('react');

var Actions     = require('../../actions');

var Contact = React.createClass({
    componentDidMount: function() {
        Actions.changePageTitle('Contact');
    },
    render: function() {
        return (
            <div className="page"></div>
        );
    }
});

module.exports = Contact;
