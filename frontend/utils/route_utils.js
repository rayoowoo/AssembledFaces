import React from 'react'
import {Route} from 'react-router-dom'

export const AuthRoute = ({component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} render={props => (
        !loggedIn? (
            <Component {...props} />
        ) : (
            <Redirect to="/" />
        )
    )}/>
);

export const ProtectedRoute = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={props => (
        loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/" />
            )
    )} />
);