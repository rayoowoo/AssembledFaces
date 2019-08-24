import { connect } from 'react-redux';
import {fetchUser} from '../../actions/user_actions'
import FriendRequests from './friend_requests'

const msp = state => {
    return {
        requests: Object.values(state.entities.friendships).filter(el => el.requester_id === state.session.id),
        currentUserId: state.session.id
    }
}

const mdp = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id))
})

export default connect(msp, mdp)(FriendRequests);