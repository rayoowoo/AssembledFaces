import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_USER, RECEIVE_ALL_USERS } from '../actions/user_actions'
import {merge} from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    let newUser;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newUser = { [action.user.id]: action.user }
            return merge({}, state, newUser);
        case RECEIVE_USER:
            newUser = { [action.user.id]: action.user}
            return merge({}, state, newUser);
        case RECEIVE_ALL_USERS:
            return merge({}, action.users)
        default:
            return state;
    }
    
}