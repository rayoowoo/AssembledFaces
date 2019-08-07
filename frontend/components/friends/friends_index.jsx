import React from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../../actions/user_actions'
import {withRouter} from 'react-router-dom'

class FriendIndex extends React.Component {

    goToFriend(friend) {
        return e => {
            e.preventDefault();
            this.props.history.push(`/user/${friend.id}`)
        }
    }

    componentWillMount() {
        this.props.fetchUser(this.props.user.id)
    }

    render() {
        const { friends, friendships = [] } = this.props; 
        debugger
        const acceptedFriendships = friendships.filter ( friendship => friendship.status === "accepted").map( friendship => {
            return friendship.requester_id === this.props.user.id ? friendship.requested_id : friendship.requester_id;
        })
        debugger
        const allFriends = friends === undefined || friends.some(friend => friend === undefined) ? null : 
            friends.filter(friend => acceptedFriendships.includes(friend.id))
                    .reverse()
                    .slice(0, 9)
                    .map(friend => {
                            return <div onClick={this.goToFriend(friend).bind(this)} 
                                        key={`friend-${friend.id}`} 
                                        className="profile-sidebar-friends-index">
                                            <img src={friend.photoUrl} alt="" />
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
    if (ownProps.user.friend_ids !== undefined) {
        return {
            friends: ownProps.user.friend_ids.map(id => state.entities.users[id]),
            friendships: Object.values(state.entities.friendships)
        } 
    } else {
        return {}
    }
    
}

const mdp = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id))
})

export default withRouter(connect(msp, mdp)(FriendIndex));