import { connect } from 'react-redux';
import {fetchUser} from '../../actions/user_actions'
import FriendRequests from './friend_requests'
import {deleteFriendship, approveFriendship} from '../../actions/friendship_actions'

const msp = state => {
    const requests = Object.values(state.entities.friendships).filter(el => el.requestedId === state.session.id && el.status === "pending") || [];
    const requestingUsers = requests.map( request => state.entities.users[request.requesterId]);
    return {
        requests: requestingUsers,
        friendships: requests,
        currentUser: state.entities.users[state.session.id],
        type: "received"
    }
}

const mdp = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id)),
    deleteFriendship: id => dispatch(deleteFriendship(id)),
    approveFriendship: friendship => dispatch(approveFriendship(friendship))
})

export default connect(msp, mdp)(FriendRequests);