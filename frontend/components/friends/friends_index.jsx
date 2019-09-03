import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class FriendIndex extends React.Component {

    goToFriend(friend) {
        return e => {
            e.preventDefault();
            this.props.history.push(`/user/${friend.id}`)
        }
    }

    render() {
        const { friends, friendships = [] } = this.props; 
        const acceptedFriendships = friendships.filter ( friendship => friendship.status === "accepted").map( friendship => {
            return friendship.requesterId === this.props.user.id ? friendship.requestedId : friendship.requesterId;
        })
        const allFriends = friends === undefined || friends.some(friend => friend === undefined) ? null : 
            friends.filter(friend => acceptedFriendships.includes(friend.id))
                    .reverse()
                    .slice(0, 9)
                    .map(friend => {
                            return <div onClick={this.goToFriend(friend).bind(this)} 
                                        key={`friend-${friend.id}`} 
                                        className="profile-sidebar-friends-index picture-default">
                                            <img src={friend.photoUrl} alt="friend-profile" />
                                    </div>
        })

        return (
            <>
                {allFriends}
            </>
        )
    }
}

const msp = (state, ownProps) => {
    if (ownProps.user.friendIds !== undefined) {
        return {
            friends: ownProps.user.friendIds.map(id => state.entities.users[id]),
            friendships: Object.values(state.entities.friendships)
        } 
    } else {
        return {}
    }
    
}

export default withRouter(connect(msp)(FriendIndex));