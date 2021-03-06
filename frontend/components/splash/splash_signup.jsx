import React from 'react'
import Signup from '../session/signup_form_container'


class SplashSignup extends React.Component {

    render() {

        return (<div className="splash-content">
            <aside>
                <h2>Connect with heroes and the multiverse around you on AssembledFaces.</h2>
                <ul>
                    <li><i className="far fa-newspaper"></i><span><strong>See photos and updates</strong> from friends in News Feed.</span></li>
                    <li><i className="far fa-star"></i><span><strong>Share what's new</strong> in your life on your <a href="https://marvelcinematicuniverse.fandom.com/wiki/Timeline" target="_blank">Timeline</a>.</span></li>
                    <li><i className="fas fa-search"></i><span><strong>Find more</strong> of what you're looking for by asking <a href="https://marvelcinematicuniverse.fandom.com/wiki/Heimdall" target="_blank">Heimdall</a>.</span></li>
                </ul>
            </aside>
            <section className="splash-section">
                <h1>Sign Up</h1>
                <p className="signup-quip">Maybe Marvel Studios will give you a <a href="https://marvelcinematicuniverse.fandom.com/wiki/Phase_Four" target="_blank">movie</a>.</p>

                <Signup />
            </section>
        </div>
        )
    }
}

export default SplashSignup;