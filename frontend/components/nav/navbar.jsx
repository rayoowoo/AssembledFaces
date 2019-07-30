import React from 'react'
import {Route} from 'react-router-dom'
import Login from '../session/login_form_container'
import Signup from '../session/signup_form_container'

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header>
                <img src="app/assets/images/logo.png" alt="assembledfaces-logo"/>
                <Login />
                <Signup />
            </header>
        )
    }
}

export default NavBar