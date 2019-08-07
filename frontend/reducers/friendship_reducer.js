import { RECEIVE_FRIENDSHIP, REMOVE_FRIENDSHIP } from '../actions/friendship_actions'
import {RECEIVE_USER} from '../actions/user_actions'
import {RECEIVE_CURRENT_USER} from '../actions/session_actions'

export default (state = {}, action) => {
    Object.freeze(state);
    debugger
    switch (action.type) {
        case RECEIVE_FRIENDSHIP:
            return Object.assign({}, action.res.friendships);
        case REMOVE_FRIENDSHIP:
            return {};
        case RECEIVE_USER:
            return Object.assign({}, action.res.friendships)
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, action.res.friendships)
        default:
            return state;
    }
}