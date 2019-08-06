import React from 'react'
import { withRouter } from 'react-router-dom'

class ProfileNav extends React.Component {

    render() {
        return (
            <nav className="profile-page-nav">
                <div className="profile-page-nav-space"></div>
                <div className="profile-page-nav-space"></div>
                <div className="profile-page-nav-space"></div>
                <div className="profile-page-nav-links">
                    <a onClick={e => this.props.history.push(`/user/${this.props.user.id}`)}>Timeline  <i className="fas fa-caret-down"></i></a>
                    <a onClick={e => this.props.history.push(`/user/${this.props.user.id}/about`)}>About</a>
                    <a onClick={e => alert("not implemented yet")}>Friends <strong>3,000</strong></a>
                    <a onClick={e => alert("not implemented yet")}>Photos</a>
                    <a onClick={e => alert("not implemented yet")}><i className="fas fa-lock"></i>Archive</a>
                    <a onClick={e => alert("not implemented yet")}>More <i className="fas fa-caret-down"></i></a>
                </div>
                <div className="profile-page-nav-space"></div>
            </nav>
        )
    }
}

export default withRouter(ProfileNav);