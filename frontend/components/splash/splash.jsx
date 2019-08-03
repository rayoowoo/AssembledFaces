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
            <section className="footer"><a href="https://github.com/rayoowoo/AssembledFaces" target="_blank">GITHUB</a><a href="https://www.linkedin.com/in/ruiyu-wu-173604134/" target="_blank">LINKEDIN</a><a href="#" target="_blank">EMAIL</a></section>
            <section className="citation">Made by Ruiyu Wu. Inspired by Facebook and Marvel Studios.</section>
        </>
    )
}

export default Splash;