import React from 'react'

class ProfileNav extends React.Component {

    render() {
        return (
            <nav className="profile-nav">
                <h1 >PROFILE NAV</h1>
                <a onClick={e => this.props.history.push("/")}>Timeline</a>
                <a onClick={e => this.props.history.push("/")}>About</a>
                <a onClick={e => this.props.history.push("/")}>Friends</a>
                <a onClick={e => this.props.history.push("/")}>Photos</a>
                <a onClick={e => this.props.history.push("/")}>Archive</a>
                <a onClick={e => this.props.history.push("/")}>More <i className="fas fa-caret-down"></i></a>
            </nav>
        )
    }
}

export default ProfileNav;