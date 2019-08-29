import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {logout} from '../../actions/session_actions'
import UserSearch from './user_search'

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
        this.props.logout().then(() => this.props.history.push('/') );
    }

    clearFocus(e) {
        e.preventDefault();
        this.refs.fakemodal.classList.remove("display");
        this.refs.profilenavdropdown.classList.remove("visible");
    }

    toggleSearchBtn() {
        this.refs.search.classList.toggle("searched");
    }

    render() {
        const {currentUser = {} } = this.props;
        const photo = Boolean(currentUser.photoUrl) ? <img src={currentUser.photoUrl} alt="" /> : null

        const navPic = <div className="comment-picture picture-default" id="nav-picture">
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
                                <UserSearch toggleSearchBtn={this.toggleSearchBtn.bind(this)}/>
                                <button ref="search"><i className="fas fa-search"></i></button>
                            </form>
                        </div>
                    </section>

                    <nav>
                        <div className="profile-nav-links">
                            
                            <div id="profile-nav-name-btn"><a onClick={this.handleLinkClick("name")}> {navPic} <span>{this.props.currentUser.firstName}</span></a></div>
                            <section id="profile-nav-home"><a onClick={this.handleLinkClick("home")}>Home</a></section>
                            <section><a onClick={e => { window.open(`https://www.youtube.com/watch?v=FHU49CD0TOs`, '_blank') }} >Create</a></section>
                        </div>


                        <div className="profile-nav-icons">
                            <i onClick={e => {e.preventDefault(); this.props.history.push(`/user/${currentUser.id}/received-requests`)}} className="fas fa-user-friends"></i>
                            <i onClick={e => { window.open(`https://www.youtube.com/watch?v=hA6hldpSTF8&start=134`, '_blank') }}  className="fas fa-comment"></i>
                            <i onClick={e => { window.open(`https://www.youtube.com/watch?v=ah9xBJHXttw`, '_blank') }}  className="fas fa-bell"></i>
                        </div>
                    <div className="profile-nav-help">
                            <i onClick={e => { window.open(`https://www.youtube.com/watch?v=CpZakOJlRoY&start=44`, '_blank') }} className="fas fa-question-circle"></i>
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
})


export default withRouter(connect(msp, mdp)(ProfileNavBar))