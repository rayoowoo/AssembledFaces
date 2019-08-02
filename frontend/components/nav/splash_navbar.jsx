import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Login from '../session/login_form_container'

class SplashNavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header className="splash-nav">
                <div className="splash-navbar">
                    <a onClick={e => this.props.history.push("/")}><img src="https://fontmeme.com/permalink/190730/63d32f6b2626b181df5c8eb9ec502934.png" alt="assembledfaces-logo" /></a>
                    {/* made using fontmeme.com/avengers-font */}
                    <Switch>
                        <Route path="/login" component={(props)=> {
                            return <button id="blank-login-newacct" onClick={(e) => this.props.history.push("/")} className="demo login-input-btn">Create New Account</button>
                        }} />
                        <Route path="/" component={Login} />
                    </Switch>
                </div>
            </header>
        )
    }
}

export default withRouter(SplashNavBar)