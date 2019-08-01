import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SplashSignup from './splash_signup'
import BlankLogin from './blank_login'



const Splash = (props) => {
    return (
        <>
            <section className="splash">

                {/* conditional code for changing the splash area, depending on the path url 
            blank-login
            forgot password
            no email
            */}
                <Switch>
                    <Route path="/login" component={BlankLogin} /> 
                    {/* <Route path="/recover" component={Recover} /> */}
                    <Route path="/" component={SplashSignup}/>
                </Switch>
            </section >
            <section className="footer">GITHUB       LINKEDIN       EMAIL</section>
            <section className="citation">Inspired by Facebook and Marvel Studios</section>
        </>
    )
}

export default Splash;