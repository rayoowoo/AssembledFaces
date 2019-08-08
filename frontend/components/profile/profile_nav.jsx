import React from 'react'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

class ProfileNav extends React.Component {

    render() {
        let archive = null;
        let filler = null;
        let caret = null;
            
        if (this.props.currentUserId === parseInt(this.props.match.params.userId)) {
            caret = <i className="fas fa-caret-down"></i>
            archive = <a onClick={e => alert("not implemented yet")}><i className="fas fa-lock"></i>Archive</a>
            filler = <><div className="profile-page-nav-space"></div><div className="profile-page-nav-space"></div></>
        }

        const { friendships } = this.props;

        

        return (
            <nav className="profile-page-nav">
                <div className="profile-page-nav-space"></div>
                {filler}
                <div className="profile-page-nav-links">
                    <a onClick={e => this.props.history.push(`/user/${this.props.user.id}`)}>Timeline {caret}</a>
                    <a onClick={e => this.props.history.push(`/user/${this.props.user.id}/about`)}>About</a>
                    <a onClick={e => alert("not implemented yet")}>Friends <strong>3,000</strong></a>
                    <a onClick={e => alert("not implemented yet")}>Photos</a>
                    {archive}
                    <a onClick={e => alert("not implemented yet")}>More <i className="fas fa-caret-down"></i></a>
                    
                </div>
                <div className="profile-page-nav-space"></div>
            </nav>
        )
    }
}

const msp = state => ({
    friendships: Object.values(state.entities.friendships)
})

export default withRouter(connect(msp)(ProfileNav));