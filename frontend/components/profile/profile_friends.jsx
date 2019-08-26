import React from 'react';
import ProfileFriendItem from './profile_friends_item'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class ProfileFriends extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user, currentUserId, friends, friendships = [] } = this.props;
        const acceptedFriendships = friendships.filter(friendship => friendship.status === "accepted").map(friendship => {
            return friendship.requester_id === user.id ? friendship.requested_id : friendship.requester_id;
        })
        const allFriends = friends === undefined || friends.some(friend => friend === undefined) ? null :
            friends.filter(friend => acceptedFriendships.includes(friend.id))
                .reverse()
                .slice(0, 9)
                .map(friend => {
                    return <ProfileFriendItem key={`friend-${friend.id}`} friend={friend}/>
                })
        
        const btn = currentUserId === user.id ? (
            <div onClick={e => this.props.history.push(`/user/${currentUserId}/received-requests`)}
                 className="profile-friends-request-btn">Friend Requests</div> 
        ) : null;


        return (
            <section className="profile-friends">
                <div className="profile-friends-header">
                    <h1><i className="fas fa-user-friends"></i>Friends</h1>
                    {btn}
                </div>

                <div className="profile-friends-index">
                    {allFriends}
                </div>
            </section>
        )
    }
}

const msp = (state, ownProps) => {
    if (ownProps.user.friend_ids !== undefined) {
        return {
            friends: ownProps.user.friend_ids.map(id => state.entities.users[id]),
            friendships: Object.values(state.entities.friendships)
        }
    } else {
        return {}
    }

}

export default withRouter(connect(msp)(ProfileFriends));