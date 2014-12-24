/** @jsx React.DOM */
var React           = require('react'),
    TransitionGroup = require('react/lib/ReactCSSTransitionGroup'),
    Router          = require('react-router');

var Actions         = require('../../actions');

var RouteHandler    = Router.RouteHandler;

var MemberPageWrapper = React.createClass({
    mixins: [
        Router.State
    ],
    render: function() {
        // Get the route name
        var routeName = this.getRoutes().reverse()[0].name;
        // Return the public page DOM
        return (
            <div id="member">
                <TransitionGroup transitionName="transition-carousel">
                    <RouteHandler component="div" key={routeName}/>
                </TransitionGroup>
            </div>
        );
    }
});

module.exports = MemberPageWrapper;
