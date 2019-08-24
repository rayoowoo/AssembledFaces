import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions'
import FriendRequests from './friend_requests'
import { deleteFriendship, approveFriendship } from '../../actions/friendship_actions'

const msp = state => {
    const requests = Object.values(state.entities.friendships).filter(el => el.requester_id === state.session.id && el.status === "pending") || [];
    const requestedUsers = requests.map(request => state.entities.users[request.requested_id]);
    return {
        requests: requestedUsers,
        friendships: requests,
        currentUser: state.entities.users[state.session.id],
        type: "sent"
    }
}

const mdp = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id)),
    deleteFriendship: id => dispatch(deleteFriendship(id)),
    approveFriendship: friendship => dispatch(approveFriendship(friendship))
})

export default connect(msp, mdp)(FriendRequests);