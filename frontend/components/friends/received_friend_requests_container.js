import { connect } from 'react-redux';
import {fetchUser} from '../../actions/user_actions'
import FriendRequests from './friend_requests'

const msp = state => {
    const requests = Object.values(state.entities.friendships).filter(el => el.requested_id === state.session.id) || [];
    const requestingUsers = requests.map( request => state.entities.users[request.requester_id]);
    return {
        requests: requestingUsers,
        currentUserId: state.session.id
    }
}

const mdp = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id))
})

export default connect(msp, mdp)(FriendRequests);