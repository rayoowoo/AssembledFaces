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

    render() {
        const { friends } = this.props; 
        const allFriends = friends === undefined || friends.some(friend => friend === undefined) ? null : friends.reverse().slice(0, 9).map(friend => {
            return <div onClick={this.goToFriend(friend).bind(this)} key={`friend-${friend.id}`} className="profile-sidebar-friends-index"><img src={friend.photoUrl} alt="" /></div>
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
            friends: ownProps.user.friend_ids.map(id => state.entities.users[id])
        } 
    } else {
        return {}
    }
    
}

const mdp = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id))
})

export default withRouter(connect(msp, mdp)(FriendIndex));