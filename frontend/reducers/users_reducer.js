import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {merge} from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const newUser = { [action.user.id]: action.user}
            return merge({}, state, newUser);
        default:
            return state;
    }
    
}