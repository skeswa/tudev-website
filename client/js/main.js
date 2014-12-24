/** @jsx React.DOM */
var React   = require('react'),
    Router  = require('react-router');

// React-router variables
var Route           = Router.Route,
    RouteHandler    = Router.RouteHandler,
    DefaultRoute    = Router.DefaultRoute,
    NotFoundRoute   = Router.NotFoundRoute;

// Authentication related page components
var NotFound    = require('./components/404');
// Publicly accessible page components
var Public      = require('./components/public'),
    About       = require('./components/public/about'),
    Contact     = require('./components/public/contact'),
    Events      = require('./components/public/events'),
    Splash      = require('./components/public/splash'),
    Blog        = require('./components/public/blog'),
    Team        = require('./components/public/team'),
    Login       = require('./components/public/login'),
    Register    = require('./components/public/register');
// Member accessible page components
var Member      = require('./components/member'),
    Dashboard   = require('./components/member/dashboard'),
    Pay         = require('./components/member/pay'),
    Profile     = require('./components/member/profile');

// Routes representing the frontend
var sitemap = (
    <Route handler={RouteHandler}>
        <Route name="public" path="/" handler={Public}>
            <Route name="blog" handler={Blog}/>
            <Route name="team" handler={Team}/>
            <Route name="about" handler={About}/>
            <Route name="events" handler={Events}/>
            <Route name="contact" handler={Contact}/>
            <Route name="login" handler={Login}/>
            <Route name="register" handler={Register}/>
            <DefaultRoute handler={Splash}/>
        </Route>
        <Route name="member" handler={Member}>
            <Route name="profile" handler={Profile}/>
            <Route name="pay" handler={Pay}/>
            <DefaultRoute handler={Dashboard}/>
        </Route>
        <NotFoundRoute handler={NotFound}/>
    </Route>
);

// Bind the routes to the DOM
Router.run(sitemap, function (Handler) {
    React.render(<Handler/>, document.body);
});
