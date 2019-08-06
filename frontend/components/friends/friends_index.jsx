import React from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../../actions/user_actions'
import {Link} from 'react-router-dom'

class FriendIndex extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.user.id)
    }

    render() {
        const { friends = [] } = this.props; 
        const allFriends = friends[0] !== undefined ? friends.reverse().slice(0, 9).map( friend => {
            return <Link to={`/user/${friend.id}`} key={`friend-${friend.id}`}><div className="profile-sidebar-friends-index"><img src={friend.photoUrl} alt="" /></div></Link>
        }) : null

        return (
            <>
                {allFriends}
            </>
        )
    }
}

const msp = (state, ownProps) => {
    const friends = ownProps.user.friend_ids.map( id => {
        return state.entities.users[id]
    })
    return { friends }
}

const mdp = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id))
})

export default connect(msp, mdp)(FriendIndex)