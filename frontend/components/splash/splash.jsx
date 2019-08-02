import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SplashSignup from './splash_signup'
import BlankLogin from './blank_login'
import RecoverPage from './recover_page'




const Splash = (props) => {
    return (
        <>
            <section className="splash">
                <Switch>
                    <Route path="/login" component={BlankLogin} /> 
                    <Route path="/recover" component={RecoverPage} />
                    <Route path="/" component={SplashSignup}/>
                </Switch>
            </section >
            <section className="footer">GITHUB       LINKEDIN       EMAIL</section>
            <section className="citation">Inspired by Facebook and Marvel Studios</section>
        </>
    )
}

export default Splash;