import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {logout} from '../../actions/session_actions'
import {fetchUser} from '../../actions/user_actions'

class ProfileNavBar extends React.Component {
    constructor(props) {
        super(props)
        this.handleLinkClick = this.handleLinkClick.bind(this);
        this.handleIconClick = this.handleIconClick.bind(this);
        this.clear = this.clear.bind(this);
        this.logout = this.logout.bind(this);
    }

    handleLinkClick(field) {
        return e => {
            e.preventDefault();
            e.target.classList.add("clicked")
            if (field === "name") {this.props.history.push(`/user/${this.props.currentUser.id}`)}
            else {this.props.history.push("/")}
        }
    }

    handleIconClick(e) {
        this.refs.profilenavdropdown.classList.add("visible");
        this.refs.fakemodal.classList.add("display");
    }

    clear(e) {
        e.target.classList.remove("clicked")
    }

    logout(e) {
        e.preventDefault();
        this.props.logout();
        this.props.history.push("/");
    }

    clearFocus(e) {
        e.preventDefault();
        this.refs.fakemodal.classList.remove("display");
        this.refs.profilenavdropdown.classList.remove("visible");
    }

    render() {
        const {currentUser = {}} = this.props;
        const photo = Boolean(currentUser.photoUrl) ? <img src={currentUser.photoUrl} alt="" /> : null

        const navPic = <div className="comment-picture" id="nav-picture">
            {photo}
            {/* FROM 1000logos.net/iron-man-logo. All rights go to Marvel Studios. */}
        </div>

        return (
            <header className="profile-nav">
                <div className="profile-navbar">
                    <section className="profile-navbar-left">
                        <div className="profile-icon"><a onClick={e => this.props.history.push("/")}><img src="https://fontmeme.com/permalink/190802/dc70627ab06270ffdb933b4333bd4d14.png" alt="assembled-faces-small-logo" /></a></div>
                        {/* made using fontmeme.com/avengers-font */}
                        <div className="profile-search">
                            <form>
                                <input type="text" placeholder="Search" />
                                <button><i className="fas fa-search"></i></button>
                            </form>
                        </div>
                    </section>

                    <nav>
                        <div className="profile-nav-links">
                            
                            <div id="profile-nav-name-btn"><a onClick={this.handleLinkClick("name")}> {navPic} <span>{this.props.currentUser.first_name}</span></a></div>
                            <section id="profile-nav-home"><a onClick={this.handleLinkClick("home")}>Home</a></section>
                            <section><a onClick={e => {e.preventDefault(); alert("sorry, doesn't work yet")} }>Create</a></section>
                        </div>


                        <div className="profile-nav-icons">
                            <i className="fas fa-user-friends"></i>
                            <i className="fas fa-comment"></i>
                            <i className="fas fa-bell"></i>
                        </div>
                    <div className="profile-nav-help">
                            <i className="fas fa-question-circle"></i>
                            <i onClick={this.handleIconClick} className="fas fa-caret-down"></i>
                        <div ref="profilenavdropdown" className="profile-nav-dropdown">
                                <div className="arrow-top"></div>
                            <a className="profile-nav-logout" onClick={this.logout}>Log Out</a>
                        </div>
                    </div>

                    </nav>
                </div>
                <div id="fakemodal" onClick={this.clearFocus.bind(this)} ref="fakemodal"></div>

            </header>
        )
    }
}

const msp = state => ({
    currentUser: state.entities.users[state.session.id] || {}
})

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    fetchUser: userId => dispatch(fetchUser(userId))
})


export default withRouter(connect(msp, mdp)(ProfileNavBar))