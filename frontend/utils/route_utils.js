import React from 'react'
import {Redirect, Route} from 'react-router-dom'

export const AuthRoute = ({ path, component: Component, loggedIn, exact }) => {
    return (
        <Route exact={exact} path={path} render={(props) => {
            return (
                loggedIn ? (
                    <Redirect to="/" />
                ) : (
                        <Component {...props} />
                    )
            )
        }} />
    )
}

export const ProtectedRoute = ({ path, component: Component, loggedIn, exact }) => {
    return (
        <Route exact={exact} path={path} render={(props) => {
            return (
                !loggedIn ? (
                    <Redirect to="/" />
                ) : (
                        <Component {...props} />
                    )
            )
        }} />
    )
}