import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_USER, RECEIVE_ALL_USERS }
import {merge} from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER, RECEIVE_USER:
            const newUser = { [action.user.id]: action.user}
            return merge({}, state, newUser);
        case RECEIVE_ALL_USERS:
            return merge({}, action.users)
        default:
            return state;
    }
    
}