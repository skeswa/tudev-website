/** @jsx React.DOM */
var React           = require('react'),
    TransitionGroup = require('react/lib/ReactCSSTransitionGroup'),
    Router          = require('react-router');

var Actions         = require('../../actions'),
    AuthService     = require('../../services/auth'),
    UIStateStore    = require('../../stores/uistate')
    Header          = require('./header'),
    Footer          = require('./footer');

var RouteHandler    = Router.RouteHandler;

var PublicPageWrapper = React.createClass({
    mixins: [
        Router.State
    ],
    componentDidMount: function() {
        // Get the session immediately
        AuthService.getSession(function(err, res) {
            if (err) {
                // TODO create mechanism to report network problems
                console.log('Could not get session', err);
            } else {
                Actions.declareSessionDataLoaded(res.body);
            }
        });
    },
    render: function() {
        // Get the route name
        var routeName = this.getRoutes().reverse()[0].name || 'splash';
        // Return the public page DOM
        return (
            <div id="public">
                <Header/>
                <div id="content">
                    <TransitionGroup transitionName="transition-carousel">
                        <RouteHandler component="div" key={routeName}/>
                    </TransitionGroup>
                </div>
                <Footer/>
            </div>
        );
    }
});

module.exports = PublicPageWrapper;
