import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from '../session/login_form_container'

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header className="nav">
                <div className="navbar">
                    <a href="/"><img src="https://fontmeme.com/permalink/190730/63d32f6b2626b181df5c8eb9ec502934.png" alt="assembledfaces-logo" /></a>
                    {/* made using fontmeme.com/avengers-font */}
                    <Switch>
                        <Route path="/login" render={null}/>
                        <Route path="/" component={Login}/>
                    </Switch>
                </div>
            </header>
        )
    }
}

export default NavBar