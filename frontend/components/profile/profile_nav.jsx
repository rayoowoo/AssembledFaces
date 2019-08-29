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
            archive = <a href={`https://www.youtube.com/watch?v=_AUs3J995Fc&start=129`} target="_blank"><i className="fas fa-lock"></i>Archive</a>
            filler = <><div className="profile-page-nav-space"></div><div className="profile-page-nav-space"></div></>
        }

        const { friendships } = this.props;
        const number = friendships.filter( friendship => {
            return (friendship.requestedId === this.props.user.id || friendship.requesterId === this.props.user.id) && friendship.status === "accepted"
        }).length      

        return (
            <nav className="profile-page-nav">
                <div className="profile-page-nav-space"></div>
                {filler}
                <div className="profile-page-nav-links">
                    <a onClick={e => this.props.history.push(`/user/${this.props.user.id}`)}>Timeline {caret}</a>
                    <a onClick={e => this.props.history.push(`/user/${this.props.user.id}/about`)}>About</a>
                    <a onClick={e => this.props.history.push(`/user/${this.props.user.id}/friends`)}>Friends <strong>{number}</strong></a>
                    <a onClick={e => this.props.history.push(`/user/${this.props.user.id}/photos`)}>Photos</a>
                    {archive}
                    <a href={`https://www.youtube.com/watch?v=jHUnLSQVtrA&start=28`} target="_blank">More <i className="fas fa-caret-down"></i></a>
                    
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