/** @jsx React.DOM */
var React       = require('react');

var Actions     = require('../../actions');

var Blog = React.createClass({
    componentDidMount: function() {
        Actions.changePageTitle('Blog');
    },
    render: function() {
        return (
            <div className="page"></div>
        );
    }
});

module.exports = Blog;
